import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { loginType } from "../../../src/types/auth/auth";
import CustomCheckbox from "../../../src/components/forms/theme-elements/CustomCheckbox";
import CustomTextField from "../../../src/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "../../../src/components/forms/theme-elements/CustomFormLabel";

import AuthSocialButtons from "./AuthSocialButtons";
import { Formik } from "formik";
import { login } from "../../../src/services/Auth";
import { redirect } from 'next/navigation';

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <AuthSocialButtons title="Sign in with" />
    <Box mt={3}>
      <Divider>
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          position="relative"
          px={2}
        >
          or sign in with
        </Typography>
      </Divider>
    </Box>


    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        return errors;
      }}
      onSubmit={(values) => {
        // console.log(values, "values");
        // login(values);
        const response = login(values);
        // window.location = "/" as any;
        
        // console.log(response, "response");
        // if(!response){
        //   redirect('/');
        // }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        dirty,
        isValid
      }) => (

        <form>
          <Stack>
            <Box>
              <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
              <CustomTextField name="username" onChange={handleChange}
                onBlur={handleBlur} type="email" id="username" variant="outlined" fullWidth />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
              <CustomTextField
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="password"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              my={2}
            >
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox defaultChecked />}
                  label="Remeber this Device"
                />
              </FormGroup>
              <Typography
                component={Link}
                href="/auth/forgot-password"
                fontWeight="500"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                }}
              >
                Forgot Password ?
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              onClick={() => handleSubmit()}
            >
              Sign In
            </Button>
          </Box>
          {subtitle}
        </form>

      )}
    </Formik>

  </>
);

export default AuthLogin;
