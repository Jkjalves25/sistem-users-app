import React from "react";
import { Box, Typography, Button } from "@mui/material";

const DepartamentManagement = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Departamentos
      </Typography>

      <Button variant="contained">
        Criar departamento
      </Button>
    </Box>
  );
};

export default DepartamentManagement;