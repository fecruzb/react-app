import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "./navItems";

export default function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const closeDrawer = () => setMobileOpen(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="open menu"
            onClick={() => setMobileOpen(true)}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React app
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={closeDrawer}
        sx={{ display: { sm: "none" } }}
      >
        <Box sx={{ width: 240 }} role="presentation" onClick={closeDrawer}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        <Typography variant="body2">Copyright 2026</Typography>
      </Box>
    </Box>
  );
}
