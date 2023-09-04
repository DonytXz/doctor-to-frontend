import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Actions from "./Actions";
import PattientProfile from "../profile/PattientProfile";

const MobileTable = ({
  patients,
  onEditPattient,
  onDeletePattient,
  setOpen,
  setOpenProfile,
}: any) => {
  const { t } = useTranslation();
  return (
    <Table
      aria-label="simple table"
      sx={{
        display: { xs: "table", sm: "none", md: "none" },
        // whiteSpace: "nowrap",
        mt: 2,
      }}
    >
      <TableHead>
        <TableRow onClick={() => setOpenProfile(true)}>
          <TableCell>
            <Typography variant="subtitle2" fontWeight={600}>
              {t(`Patient`)}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle2" fontWeight={600}>
              {t(`Phone`)}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle2" fontWeight={600}>
              {t(`Actions`)}
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {patients?.length > 0 &&
          patients?.map((pattient: any, index: number) => (
            <TableRow key={index}>
              <TableCell onClick={() => setOpenProfile(true)}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {pattient?.name}
                </Typography>
              </TableCell>
              <TableCell onClick={() => setOpenProfile(true)}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {pattient?.phone}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {pattient?.post}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Actions
                  onEditPattient={onEditPattient}
                  onDeletePattient={onDeletePattient}
                  patientId={pattient?._id}
                />
              </TableCell>
              <PattientProfile
                pattient={pattient}
                open={open}
                setOpen={setOpen}
              />
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default MobileTable;
