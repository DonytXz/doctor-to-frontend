import {
  Modal,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Paper,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useEffect, useMemo } from "react";

const PattientProfile = ({
  openProfile,
  setOpenProfile,
  selectedPattient,
}: any) => {
  return (
    <>
      <Dialog
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        maxWidth="sm"
        // sx={{ padding: "30px" }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        aria-hidden="true"
        keepMounted={false}
      >
        <DialogTitle id="alert-dialog-title">
          {selectedPattient?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedPattient?.curp}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button>Disagree</Button>
            <Button autoFocus>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PattientProfile;
