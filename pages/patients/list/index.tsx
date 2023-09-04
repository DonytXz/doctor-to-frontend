import React, { useEffect, useRef, useState } from "react";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import PageContainer from "../../../src/components/container/Pagecontainer";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumPatients } from "../../../src/utils/BCrumPatients";
import { useTranslation } from "react-i18next";
import PatientsListTable from "../../../src/components/patients/PatientsListTable";
import ButtonsBar from "src/components/shared/ButtonsBar";
import { getPatients } from "src/services/Patients";
import { useDispatch } from "react-redux";
import { setLoadder } from "src/store/customizer/CustomizerSlice";
import { CircularProgress, Stack } from "@mui/material";
import SearchOnTable from "src/components/patients/table/SearchOnTable";

const ClientList = () => {
  const { t } = useTranslation();
  const [patients, setPatients]: any = useState([]);
  const [searched, setSearched]: any = useState([]);
  const [patientsFiltered, setPatientsFiltered]: any = useState([]);
  const [loadding, setLoadding]: any = useState(false);
  const dispatch = useDispatch();

  // const fetchApi = () => {
  //   // if (isSubscribed) {
  //     const response:any =  getPatients();
  //     setPatients(response?.result);
  //   // }
  // };
  // console.log("ClientList loads");
  useEffect(() => {
    setLoadding(true);
    // dispatch(setLoadder(true));
    // let isSubscribed = true;
    // fetchApi()
    getPatients()
      // .then(() => {
      //   dispatch(setLoadder(true));
      // })
      .then((response: any) => {
        // console.log(response);
        setLoadding(false);
        setPatients(response?.result);
        // dispatch(setLoadder(false));
      });
    // console.log(patients, "patients");
    return () => {
      setLoadding(false);
    };
  }, []);

  useEffect(() => {
    // console.clear();
    const foundItems: Array<any> = [];
    patients?.find((patient: any) => {
      // console.log(
      //   patient,
      //   "patient",
      //   patient?.name?.includes(searched),
      //   patient?.phone?.includes(searched)
      // );

      if (
        patient?.name?.toLowerCase().includes(searched) ||
        (patient?.phone?.toLowerCase().includes(searched) && !foundItems?.includes(patient))
      ) {
        foundItems.push(patient);
      }
    });
    setPatientsFiltered(foundItems);
  }, [searched]);
  return (
    <>
      <PageContainer
        title={t(`${"Patients"}`) as string}
        description="List of all Patients"
      >
        <Breadcrumb title="Patients" items={BCrumPatients} />
        <DashboardCard title="Patients List">
          <>
            {!loadding ? (
              <>
                <SearchOnTable setSearched={setSearched} searched={searched} />
                {searched.length > 0 ? (
                  <PatientsListTable patients={patientsFiltered} />
                ) : (
                  <PatientsListTable patients={patients} />
                )}
              </>
            ) : (
              <Stack alignItems="center">
                <CircularProgress />
              </Stack>
            )}
            {/* <ButtonsBar /> */}
          </>
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default ClientList;
