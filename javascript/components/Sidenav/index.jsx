import React from "react";
import { NavLink } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import WorkSharpIcon from "@mui/icons-material/WorkSharp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WebhookIcon from "@mui/icons-material/Webhook";

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { label: "Colaboradores", path: "/collaborators", icon: <PeopleIcon /> },
  { label: "Departamentos", path: "/departments", icon: <ApartmentSharpIcon /> },
  { label: "Cargos", path: "/positions", icon: <WorkSharpIcon /> },
  { label: "Usuários", path: "/users", icon: <PeopleAltIcon /> },
  { label: "API", path: "/api", icon: <WebhookIcon /> },
];

const Sidenav = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                "&.active": {
                  backgroundColor: "action.selected",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidenav;