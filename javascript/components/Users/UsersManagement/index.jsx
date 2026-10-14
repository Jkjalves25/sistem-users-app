import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "Colaborador",
    flex: 2,
  },
   {
    field: "matricula",
    headerName: "Matricula",
    flex: 2,
  },
  {
    field: "manager",
    headerName: "Gestor",
    flex: 2,
  },
  {
    field: "position",
    headerName: "Cargo",
    flex: 2,
  },
  {
    field: "department",
    headerName: "Departamento",
    flex: 2,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 2,
  },
];

//Fazer uma desestruturação para trazer do controller os dados das linhas baseado no JSON do controller
//const rows [data, Setdata] = useState() 
const rows = [
  {
    id: 1,
    name: "Maria Silva",
    matricula: "00000",
    manager: "João",
    position: "Analista",
    department: "Tecnologia",
    status: "Ativo",
  },
  {
    id: 2,
    name: "Carlos Souza",
    matricula: "11111",
    manager: "Maria",
    position: "Desenvolvedor",
    department: "Tecnologia",
    status: "Ativo",
  },
];

const UsersManagement = () => {
  return (
    <Card>
      <CardHeader title="Colaboradores" />

      <CardContent>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </CardContent>
    </Card>
  );
};

export default UsersManagement;