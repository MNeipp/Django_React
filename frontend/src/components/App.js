  
import React, { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom'
import { Container } from 'reactstrap';
import TableContainer from './TableContainer';
import axios from 'axios'


const App = () => {
    const [data, setData] = useState(null);
    // useEffect(() => {
    //     axios.get('/api/users')
    //     .then(response => setData(response.data));
    //   }, []);
    useEffect(() => {
      const doFetch = async () => {
        const response = await fetch("/api/users")
        // const response = await fetch("https://randomuser.me/api/?results=100")
        const body = await response.json()
        setData(body);
      }
      doFetch()
    }, [])
    

//   const columns = useMemo(
//     () => [
//       {
//         Header: 'First Name',
//         accessor: 'first_name',
//       },
//       {
//         Header: 'Last Name',
//         accessor: 'last_name',
//       },
//       {
//         Header: 'Email',
//         accessor: 'email',
//       },
    
//     ],
//     [] );
    const columns = useMemo(
        () => [
        {
            Header: "Title",
            accessor: "name.title",
        },
        {
            Header: "First Name",
            accessor: "name.first",
        },
        {
            Header: "Last Name",
            accessor: "name.last",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "City",
            accessor: "location.city",
        },
        ],
        []
    )

    return (
        <Container style={{ marginTop: 100}}>
            <h1>This will render!</h1>
            {data  && <TableContainer columns={columns} users={data} />}
        </Container>
    );
};

ReactDOM.render(<App/>, document.getElementById('app'))