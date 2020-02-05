import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { AppTitle, UserAvatar, UserContainer, UserName } from "./Header.styled";

function Heder({ user, getUser }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  useEffect(() => {
    getUser();
  }, [getUser]);
  const open = Boolean(anchorEl);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <AppTitle variant="h6">GitHub Repository Search</AppTitle>
        {user && (
          <UserContainer>
            <UserAvatar alt={user.name} src={user.avatar_url} />
            <UserName variant="caption">{user.login}</UserName>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Button} href="/">
                Logout
              </MenuItem>
            </Menu>
          </UserContainer>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Heder;
