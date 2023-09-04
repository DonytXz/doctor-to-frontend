import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import EditPatientForm from "../editPatient/EditPatientForm";

const EditPatient = ({ open, setOpen, idPattient }: any) => {
  const style = {
    // position: "relative" as "relative",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: "80%",
    margin: "0 auto",
    bgcolor: "background.paper",
    border: "1px solid #fff",
    boxShadow: 24,
    height: "100%",
    overflow: "auto",
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <EditPatientForm idPattient={idPattient} setOpen={setOpen}  />
      </Box>
    </Modal>
  );
};

export default EditPatient;
