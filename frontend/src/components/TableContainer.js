import React from "react"
import { useTable } from "react-table"
import {Table} from 'reactstrap'

const TableContainer = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (

    <Table {...getTableProps()}>
    <thead>
        {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
            <th>
                {column.render('Header')}
            </th>
            ))}
        </tr>
        ))}
    </thead>
    <tbody {...getTableBodyProps()}>
        {rows.map(row => {
        prepareRow(row)
        return (
            <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
                return (
                <td>
                    {cell.render('Cell')}
                </td>
                )
            })}
            </tr>
        )
        })}
        </tbody>
    </Table>
      

  )
}

export default TableContainer