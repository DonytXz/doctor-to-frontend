import React from "react";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import PageContainer from "../../../src/components/container/Pagecontainer";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumbClients } from "../BCrumClients";
import { useTranslation } from "react-i18next";
import ClientListTable from "../../../src/components/clients/ClientListTable";

const ClientList = () => {
  const { t } = useTranslation();
  return (
    <PageContainer
      title={t(`${"Clients"}`) as string}
      description="List of all Clients"
    >
      <Breadcrumb title="Clients" items={BCrumbClients} />
      <DashboardCard title="Client List">
        <ClientListTable />
      </DashboardCard>
    </PageContainer>
  );
};

export default ClientList;
