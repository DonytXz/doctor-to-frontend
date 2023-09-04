import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Fab,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

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
          <BottomNavigationAction
            label="Book Apointment"
            icon={<EventAvailableIcon />}
          />
          <BottomNavigationAction label="Add Patient" icon={<AddIcon />} />
          <BottomNavigationAction
            label="Calendar"
            icon={<CalendarMonthIcon />}
          />
          <BottomNavigationAction label="Expedient" icon={<FeedIcon />} />
          <BottomNavigationAction
            label="Cash register"
            icon={<MonetizationOnIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ButtonsBar;
