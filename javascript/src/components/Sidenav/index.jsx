import React from "react";
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

const Sidenav = () => {

  return (
    <Drawer variant="permanent" anchor="left"
    sx={{
  "& .MuiDrawer-paper": {
    width: 240,
  },
}}
   >
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>

          <ListItemText primary="Colaboradores" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ApartmentSharpIcon />
          </ListItemIcon>

          <ListItemText primary="Departamentos" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <WorkSharpIcon />
          </ListItemIcon>

          <ListItemText primary="Cargos" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>

          <ListItemText primary="Usuários" />
        </ListItemButton>
      </ListItem>
    </List>
    </Drawer>
  );
}
export default Sidenav;