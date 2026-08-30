import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const DashboardManagement = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Colaboradores
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Departamentos
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Cargos
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Usuários
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardManagement;