import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useLogout } from "../../hook/useLogout.tsx";
import { onLogout } from "../../utils/logout.ts";
import { snackVar } from "../../constants/snack.ts";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "../../constants/errors.ts";
import router from "../Routes.tsx";

const Settings = () => {
  const { logout } = useLogout();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="" />
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
        <MenuItem key="profile" onClick={() => router.navigate("/profile")}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>
        <MenuItem
          key="logout"
          onClick={async () => {
            try {
              await logout();
              onLogout();
              handleCloseUserMenu();
            } catch (err) {
              snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
            }
          }}
        >
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Settings;
