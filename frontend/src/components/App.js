import React, {useEffect, useState, useMemo} from 'react';
import ReactDOM from 'react-dom'
import {Container, Spinner} from 'reactstrap';
import TableContainer from './TableContainer';
import axios from 'axios'


const App = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        axios.get('/api/users')
            .then(response => setData(response.data));
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'first_name',
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
        ],
        []
    );

        return ( 
            <Container>
            {data ? <TableContainer data = {data} columns = {columns}/> : <Spinner animation="border" role="status"/> }
            </Container>
        );

    }
    ReactDOM.render( < App / > , document.getElementById('app'))