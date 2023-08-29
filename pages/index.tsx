"use client";
import React from "react";
import { Typography } from "@mui/material";
import Breadcrumb from "../src/layouts/full/shared/breadcrumb/Breadcrumb";
import PageContainer from "../src/components/container/Pagecontainer";
import DashboardCard from "../src/components/shared/DashboardCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Sample Page",
  },
];

export default function Home() {
  if (typeof window !== "undefined") {
    const id = localStorage?.getItem("id") || "";
    const token = localStorage?.getItem("token") || "";
    console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }

  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {/* breadcrumb */}
      <Breadcrumb title="Sample Page" items={BCrumb} />
      {/* end breadcrumb */}
      <DashboardCard title="Sample Page">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      {/* <ClientList /> */}
    </PageContainer>
  );
}
