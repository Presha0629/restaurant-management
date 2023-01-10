import React from 'react';
import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const TableList = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    // Fetch tables from the server here
    // and update the state using setTables
  }, []);

  const handleAddTable = () => {
    // Open a modal or form to add a new table
  };

  const handleEditTable = (tableId) => {
    // Open a modal or form to edit the table with the given ID
  };

  const handleDeleteTable = (tableId) => {
    // Delete the table with the given ID from the server
    // and update the state using setTables
  };

  return (
    <>
      <Button onClick={handleAddTable}>Add Table</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.id}</td>
              <td>{table.name}</td>
              <td>{table.capacity}</td>
              <td>
                <Button onClick={() => handleEditTable(table.id)}>Edit</Button>
                <Button onClick={() => handleDeleteTable(table.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableList;
