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
import { getPatients } from "../../services/Patients";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const PatientsListTable = () => {
  const [patients, setPatients]: any = useState([]);
  const { t } = useTranslation();

  const fetchApi = async () => {
    const response = await getPatients();
    setPatients(response?.result);
  };
  useEffect(() => { 
    fetchApi();
    console.log(patients, "patients");
  }, []);

  return (
    <>
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            // whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
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
                  {t(`Adress`)}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2" fontWeight={600}>
                  {t(`Budget`)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  {t(`Status`)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients?.length > 0 &&
              patients.map((patient: any) => (
                <TableRow>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {patient.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {patient.phone}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          sx={{
                            fontSize: "13px",
                          }}
                        >
                          {patient.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {patient.address}
                    </Typography>
                  </TableCell>
                        <TableCell align="right">
                          <Typography variant="h6">${patient.budget}33,000MXN</Typography>
                        </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: 'primary.main',
                        color: "#fff",
                      }}
                      size="small"
                      label="Medium"
                    ></Chip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default PatientsListTable;
