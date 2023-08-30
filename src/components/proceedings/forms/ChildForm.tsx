import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";

const ChildForm = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  objKey,
  objValue,
  title,
  isOneItem = false,
}: any) => {
  const { t } = useTranslation();
  return (
    <Grid item lg={isOneItem ? 12 : 6} md={12} sm={12} xs={12}>
      <CustomFormLabel
        sx={{
          mt: 0,
          textTransform: "capitalize",
        }}
        htmlFor={`{${objKey}-text`}
      >
        {title}
      </CustomFormLabel>

      <CustomTextField
        type={objKey}
        name={objKey}
        onChange={handleChange}
        onBlur={handleBlur}
        id={`{${objKey}-text`}
        variant="outlined"
        fullWidth
      />
    </Grid>
  );
};

export default ChildForm;
