
import { Box } from "@mui/material";
import Sidenav from "./Sidenav";

export default function AppLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidenav />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          minHeight: "100vh",
          ml: "240px",
          p: 3,
          bgcolor: "background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
