import React from "react";
import PageContainer from "../../../src/components/container/Pagecontainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumPatients } from "../../../src/utils/BCrumPatients";
import { useTranslation } from "react-i18next";
import ClientRegisterForm from "../../../src/components/patients/PatientRegisterForm";
import ButtonsBar from "src/components/shared/ButtonsBar";

const RegisterClient = () => {
  const { t } = useTranslation();
  return (
    <PageContainer title="Patients" description="List of all Patients">
      <Breadcrumb title="Patients" items={BCrumPatients} />
      <DashboardCard title="Patient Register">
        <div>
          <ClientRegisterForm />
        </div>
      </DashboardCard>
      <ButtonsBar />
    </PageContainer>
  );
};

export default RegisterClient;
