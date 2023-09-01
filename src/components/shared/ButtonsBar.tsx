import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Fab,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import ArchiveIcon from "@mui/icons-material/Archive";
import React from "react";

const ButtonsBar = () => {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          // bottom: 20,
          bottom: 0,
          left: 0,
          right: 0,
          background: "transparent",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{
            mb: 3,
            background: "transparent",
          }}
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ButtonsBar;
