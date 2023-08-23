import React, { useCallback } from "react";
import { Grid, MenuItem, Alert } from "@mui/material";
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import CustomSelect from "../../forms/theme-elements/CustomSelect";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import { useTranslation } from "react-i18next";

const AddressInformation = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}: any) => {
  const countries = [
    {
      value: "india",
      label: "India",
    },
    {
      value: "uk",
      label: "United Kingdom",
    },
    {
      value: "srilanka",
      label: "Srilanka",
    },
  ];

  const { t } = useTranslation();
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient adress information */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Alert severity="info">{t(`Address`)}</Alert>
      <Grid container spacing={3} mb={3} mt={1}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="street-text"
          >
            {t(`Street`)}
          </CustomFormLabel>

          <CustomTextField
            type="street"
            name="street"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.street}
            id="street-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="city-text"
          >
            {t(`City`)}
          </CustomFormLabel>
          <CustomTextField
            type="city"
            name="city"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.city}
            id="city-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="state-text"
          >
            {t(`State`)}
          </CustomFormLabel>
          <CustomTextField
            type="state"
            name="state"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.state}
            id="state-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="postalCode-text"
          >
            {t(`Post Code`)}
          </CustomFormLabel>
          <CustomTextField
            type="postalCode"
            name="postalCode"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.postalCode}
            id="postalCode-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="country-text"
          >
            {t(`Country`)}
          </CustomFormLabel>
          <CustomSelect
            type="country"
            name="country"
            onChange={handleChange}
            onBlur={handleBlur}
            id="country-select"
            fullWidth
            variant="outlined"
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient adress information */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default AddressInformation;
