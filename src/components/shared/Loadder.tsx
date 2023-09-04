import { CircularProgress, Stack } from "@mui/material";
import React from "react";

function WithLoading(Component: any) {
  return function WihLoadingComponent({ isLoadding, ...props }: any) {
    if (!isLoadding) return <Component {...props} />;
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  };
}
export default WithLoading;
