import { Grid, Alert } from "@mui/material";
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import { useTranslation } from "react-i18next";

const ContactInformation = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}: any) => {
  const { t } = useTranslation();
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient contact information */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Alert severity="info">{t(`Contact Information`)}</Alert>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <CustomFormLabel htmlFor="email-text">{t(`Email`)}</CustomFormLabel>
        <CustomTextField
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.email}
          id="email-text"
          variant="outlined"
          fullWidth
        />

        {errors.email && touched.email && errors.email}
        <CustomFormLabel htmlFor="phone-text">
          {t(`Phone Number`)}
        </CustomFormLabel>
        <CustomTextField
          type="phone"
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.phone}
          id="phone-text"
          variant="outlined"
          fullWidth
        />
        {errors.phone && touched.phone && errors.phone}
        <CustomFormLabel htmlFor="emergencyContact-text">
          {t(`Emergency Phone Number`)}
        </CustomFormLabel>
        <CustomTextField
          type="emergencyContact"
          name="emergencyContact"
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values.emergencyPhone}
          id="emergencyContact-text"
          variant="outlined"
          fullWidth
        />
        {errors.emergencyPhone &&
          touched.emergencyPhone &&
          errors.emergencyPhone}
      </Grid>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient contact information */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default ContactInformation;
