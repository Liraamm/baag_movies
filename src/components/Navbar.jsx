import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const settings = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Movies",
    link: "/movies",
  },
  {
    title: "Add Movie",
    link: "/add",
  },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgba(49, 17, 44, 0.9)" }}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="More">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0, marginLeft: 10 }}
            >
              <Avatar
                sx={{ borderRadius: 0 }}
                alt="Remy Sharp"
                src="https://www.svgrepo.com/download/68443/movie-camera.svg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                component={NavLink}
                to={setting.link}
                key={setting.title}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{setting.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
