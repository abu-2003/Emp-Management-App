
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, MenuItem, Box } from "@mui/material";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ name: "", email: "", status: "active" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const response = await axios.get(`https://emp-server-nag6.onrender.com/employees/${id}`);
    setEmployee(response.data);
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://emp-server-nag6.onrender.com/employees/${id}`, employee);
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
        Save Changes
      </Button>
    </Box>
  );
};

export default EditEmployee;
