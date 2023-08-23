import { Button } from "@mui/material";
import ParentCard from "../shared/ParentCard";
import PersonalIformation from "./registerForm/PersonalIformation";
import AddressInformation from "./registerForm/AddressInformation";
import ContactInformation from "./registerForm/ContactInformation";
import { Formik } from "formik";
// import { storePatient } from "@services/Paitients";
import { storePatient } from "../../services/Patients";

const PatientRegisterForm = () => {
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient Form */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Formik
        initialValues={{
          email: "",
          phone: null,
          emergencyContact: null,

          street: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",

          name: "",
          lastName: "",
          gender: "",
          religion: "",
          datheOfBirth: Date,
          maritalStatus: "",
          ocupation: "",
          bloodType: "",
          age: "",
          curp: "",
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
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          storePatient(values);
          setSubmitting(false);
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
        }) => (
          <ParentCard
            title="Patient Information"
            footer={
              <>
                <Button
                  onClick={() => handleSubmit()}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    ml: 1,
                  }}
                >
                  Cancel
                </Button>
              </>
            }
          >
            <form>
              <PersonalIformation
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <AddressInformation
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <ContactInformation
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </form>
          </ParentCard>
        )}
      </Formik>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient Form */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default PatientRegisterForm;
