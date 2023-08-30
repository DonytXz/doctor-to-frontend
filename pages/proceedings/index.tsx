import React from "react";
import PageContainer from "src/components/container/Pagecontainer";
import Breadcrumb from "src/layouts/full/shared/breadcrumb/Breadcrumb";
import { BCrumPatients } from "./BCrumPatients";
import DashboardCard from "src/components/shared/DashboardCard";
import ProceedingsForm from "src/components/proceedings/ProceedingsForm";

const index = () => {
  return (
    <PageContainer title="Patients" description="List of all Patients">
      <Breadcrumb title="Patients" items={BCrumPatients} />
      <DashboardCard title="Create Proceedings">
        <div>
          <ProceedingsForm />
        </div>
      </DashboardCard>
    </PageContainer>
  );
};

export default index;
