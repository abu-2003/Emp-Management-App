
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box } from "@mui/material";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get("https://emp-server-nag6.onrender.com/employees");
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://emp-server-nag6.onrender.com/employees/${id}`);

    fetchEmployees();
  };

  return (
    <Box sx={{ padding: '20px', margin: '10px', backgroundColor: '#fff' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={employee.id}>
               
                <TableCell>{index + 1}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.status}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/edit/${employee.id}`} variant="contained" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(employee.id)} variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
