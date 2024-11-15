
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, MenuItem, Box } from "@mui/material";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ name: "", email: "", status: "active" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://emp-server-nag6.onrender.com/employees", employee);
    navigate("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: "auto", mt: 5 }}>
      <TextField label="Name" name="name" value={employee.name} onChange={handleChange} fullWidth required sx={{ mb: 3 }} />
      <TextField label="Email" name="email" value={employee.email} onChange={handleChange} fullWidth required sx={{ mb: 3 }} />
      <TextField select label="Status" name="status" value={employee.status} onChange={handleChange} fullWidth required sx={{ mb: 3 }}>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" fullWidth>
        Add Employee
      </Button>
    </Box>
  );
};

export default AddEmployee;
