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

const PatientsListTable = () => {
  const [patients, setPatients]: any = useState([]);

  const patientsMock = [
    {
      id: "1",
      name: "Sunil Joshi",
      post: "Cosmetologo",
      pname: "Elite Admin",
      priority: "Low",
      pbg: "primary.main",
      budget: "3.9",
    },
    {
      id: "2",
      name: "Andrew McDownland",
      post: "Cosmetologo",
      pname: "Real Homes WP Theme",
      priority: "Medium",
      pbg: "secondary.main",
      budget: "24.5",
    },
    {
      id: "3",
      name: "Christopher Jamil",
      post: "Receptionis",
      pname: "MedicalPro WP Theme",
      priority: "High",
      pbg: "error.main",
      budget: "12.8",
    },
    {
      id: "4",
      name: "Nirav Joshi",
      post: "Cosmetologo",
      pname: "Hosting Press HTML",
      priority: "Critical",
      pbg: "success.main",
      budget: "2.4",
    },
  ];

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getPatients();
      setPatients(response);
      console.log(patients, "patients", response);
    };
    fetchApi();
  }, []);

  return (
    <>
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Assigned
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Priority
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Budget
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients?.length > 0 &&
              patients.map((patient: any) => (
                <TableRow key={patient.name}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {patient.curp}
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
                          {patient.name}
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
                      {patient.pname}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: patient.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={patient.priority}
                    ></Chip>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">${patient.budget}k</Typography>
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
