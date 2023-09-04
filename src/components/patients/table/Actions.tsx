import React from "react";
import { IconPencil, IconTrashFilled } from "@tabler/icons-react";
import { Box, Stack } from "@mui/material";

const Actions = ({ onEditPattient, onDeletePattient, patientId }: any) => {
  return (
    <Stack direction="row">
      <Box onClick={() => onEditPattient(patientId)} sx={{ mr: "2px" }}>
        <div style={{ cursor: "pointer" }}>
          <IconPencil width={22} />
        </div>
      </Box>
      <Box onClick={() => onDeletePattient(patientId)} sx={{ ml: "2px" }}>
        <div style={{ cursor: "pointer" }}>
          <IconTrashFilled width={22} />
        </div>
      </Box>
    </Stack>
  );
};

export default Actions;
