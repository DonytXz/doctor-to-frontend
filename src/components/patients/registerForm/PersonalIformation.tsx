import { Grid, MenuItem, Alert } from "@mui/material";
import CustomTextField from "../../forms/theme-elements/CustomTextField";
import CustomSelect from "../../forms/theme-elements/CustomSelect";
import CustomFormLabel from "../../forms/theme-elements/CustomFormLabel";
import { useTranslation } from "react-i18next";

const PersonalIformation = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}: any) => {
  const { t } = useTranslation();
  const genders = [
    {
      value: "female",
      label: "Female",
    },
    {
      value: "male",
      label: "Male",
    },
    {
      value: "other",
      label: "Other",
    },
  ];
  const maritalStus = [
    {
      value: "single",
      label: "Singles",
    },
    {
      value: "married",
      label: "Married",
    },
    {
      value: "widower",
      label: "Widower",
    },
    {
      value: "free-Union",
      label: "Free Union",
    },
    {
      value: "divorced",
      label: "Divorced",
    },
  ];
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient iformation */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Alert severity="info">{t(`Person Info`)}</Alert>
      <Grid container spacing={3} mb={3}>
        <Grid item lg={6} md={12} sm={12}>
          <CustomFormLabel htmlFor="name-text">
            {t(`First Name`)}
          </CustomFormLabel>
          <CustomTextField
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.name}
            id="name-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="gender-text">
            {t(`Select Gender`)}
          </CustomFormLabel>
          <CustomSelect
            type="gender"
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            id="gender-text"
            fullWidth
            variant="outlined"
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomFormLabel htmlFor="curp-text">{t(`Curp`)}</CustomFormLabel>
          <CustomTextField
            type="curp"
            name="curp"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.curp}
            id="curp-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="religion-text">
            {t(`Religion`)}
          </CustomFormLabel>
          <CustomTextField
            type="religion"
            name="religion"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.religion}
            id="religion-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="bloodType-text">
            {t(`Blod Type`)}
          </CustomFormLabel>
          <CustomTextField
            type="bloodType"
            name="bloodType"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.bloodType}
            id="bloodType-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          <CustomFormLabel htmlFor="lastName-text">
            {t(`Last Name`)}
          </CustomFormLabel>

          <CustomTextField
            type="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.lastName}
            id="lastName-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="datheOfBirth">
            {t(`Date of Birth`)}
          </CustomFormLabel>

          <CustomTextField
            type="datheOfBirth"
            name="datheOfBirth"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.datheOfBirth}
            id="datheOfBirth"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <CustomFormLabel htmlFor="maritalStatus-text">
            {t(`Marital Status`)}
          </CustomFormLabel>
          <CustomSelect
            type="maritalStatus"
            name="maritalStatus"
            onChange={handleChange}
            onBlur={handleBlur}
            id="maritalStatus-text"
            fullWidth
            variant="outlined"
          >
            {maritalStus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomFormLabel htmlFor="ocupation-text">
            {t(`Ocupation`)}
          </CustomFormLabel>
          <CustomTextField
            type="ocupation"
            name="ocupation"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.ocupation}
            id="ocupation-text"
            variant="outlined"
            fullWidth
          />
          <CustomFormLabel htmlFor="age-text">{t(`Age`)}</CustomFormLabel>
          <CustomTextField
            type="age"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.age}
            id="age-text"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient iformation */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default PersonalIformation;
