import React from "react";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import PageContainer from "../../../src/components/container/Pagecontainer";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumPatients } from "../../../src/utils/BCrumPatients";
import { useTranslation } from "react-i18next";
import ClientListTable from "../../../src/components/patients/PatientsListTable";

const ClientList = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      title={t(`${"Patients"}`) as string}
      description="List of all Patients"
    >
      <Breadcrumb title="Patients" items={BCrumPatients} />
      <DashboardCard title="Patients List">
        <ClientListTable />
      </DashboardCard>
    </PageContainer>
  );
};

export default ClientList;
