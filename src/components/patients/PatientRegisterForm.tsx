import { Alert, Button } from "@mui/material";
import ParentCard from "../shared/ParentCard";
import PersonalIformation from "./registerForm/PersonalIformation";
import AddressInformation from "./registerForm/AddressInformation";
import ContactInformation from "./registerForm/ContactInformation";
import { Formik } from "formik";
import { storePatient } from "../../services/Patients";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from "react-i18next";


const PatientRegisterForm = () => {
  const [success, SetSuccess] = useState(false);
  const { t } = useTranslation();
  const txtSuccess = t(`Patient has successfully registered`);
  const notifySuccess = () => toast.success(txtSuccess);
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient Form */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Formik
        initialValues={{
          email: "",
          phone: "",
          emergencyContact: "",

          street: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",

          name: "",
          lastName: "",
          gender: "",
          religion: "",
          birthdate: Date,
          civilstatus: "",
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
          const address = `${values.street} ${values.zipCode} ${values.city} ${values.state} ${values.country}`;
          const patient: any = {
            email: values.email,
            phone: `${values.phone}`,
            emergencyContact: `${values.emergencyContact}`,
            address: address,
            name: `${values.name} ${values.lastName}`,
            gender: values.gender,
            religion: values.religion,
            birthdate: values.birthdate.toString(),
            civilstatus: values.civilstatus,
            ocupation: values.ocupation,
            bloodType: values.bloodType,
            age: values.age,
            curp: values.curp,
          };
          notifySuccess()
          storePatient(patient);
          SetSuccess(true);
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
          dirty,
          isValid 
        }) => (
          <ParentCard
            title="Patient Information"
            footer={
              <>
                <Button
                  onClick={() => handleSubmit()}
                  variant="contained"
                  color="primary"
                  disabled={!(dirty && isValid)}
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
      <Toaster />
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient Form */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default PatientRegisterForm;
