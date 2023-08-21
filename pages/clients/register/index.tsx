import React from "react";
import PageContainer from "../../../src/components/container/Pagecontainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumbClients } from "../BCrumClients";
import { useTranslation } from "react-i18next";
import ClientRegisterForm from "../../../src/components/clients/ClientRegisterForm";

const RegisterClient = () => {
  const { t } = useTranslation();
  return (
    <PageContainer title="Clients" description="List of all Clients">
      <Breadcrumb title="Clients" items={BCrumbClients} />
      <DashboardCard title="Client Register">
        <div>
          <ClientRegisterForm />
        </div>
      </DashboardCard>
    </PageContainer>
  );
};

export default RegisterClient;
