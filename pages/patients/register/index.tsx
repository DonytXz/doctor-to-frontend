import React from "react";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumPatients } from "../../../src/utils/BCrumPatients";
import { useTranslation } from "react-i18next";
import ClientRegisterForm from "../../../src/components/patients/PatientRegisterForm";

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
    </PageContainer>
  );
};

export default RegisterClient;
