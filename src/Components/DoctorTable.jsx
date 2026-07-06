import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, CircularProgress, Alert, Avatar } from '@mui/material';

// 1. Define columns configuration for the Doctor's Directory
const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 70 
  },
  {
    field: 'avatar',
    headerName: 'Photo',
    width: 80,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Avatar src={params.value} alt={params.row.name} sx={{ width: 35, height: 35, my: 0.5 }} />
    )
  },
  { 
    field: 'name', 
    headerName: 'Doctor Name', 
    width: 200, 
    editable: false 
  },
  { 
    field: 'specialty', 
    headerName: 'Specialty', 
    width: 180 
  },
  { 
    field: 'experience', 
    headerName: 'Experience (Yrs)', 
    type: 'number', 
    width: 130 
  },
  { 
    field: 'hospital', 
    headerName: 'Hospital / Clinic', 
    width: 220 
  },
  { 
    field: 'email', 
    headerName: 'Email Address', 
    width: 200 
  },
  { 
    field: 'status', 
    headerName: 'Availability', 
    width: 130,
    renderCell: (params) => (
      <Box 
        sx={{
          color: params.value === 'Available' ? 'success.main' : 'error.main',
          fontWeight: 'bold'
        }}
      >
        {params.value}
      </Box>
    )
  }
];

export default function DoctorTable() {
  // 2. Set up component states
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Fetch data from the API endpoint
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend API URL
        const response = await fetch('/doctors.json');
        
        if (!response.ok) {
          throw new Error('Failed to retrieve data from the server.');
        }
        
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // 4. Render Loading state
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  // 5. Render Error state
  if (error) {
    return (
      <Box m={2}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  // 6. Render Data Grid Layout
  return (
    <Box sx={{ height: 500, width: '100%', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'medium' }}>
        Doctor Directory
      </Typography>
      <DataGrid
        rows={doctors}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
