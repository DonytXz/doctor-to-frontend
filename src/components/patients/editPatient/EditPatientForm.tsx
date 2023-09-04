import { Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import PersonalIformation from "../registerForm/PersonalIformation";
import AddressInformation from "../registerForm/AddressInformation";
import ContactInformation from "../registerForm/ContactInformation";
import { updatePatient } from "src/services/Patients";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setLoadder, setToast } from "src/store/customizer/CustomizerSlice";

const EditPatientForm = ({ setOpen, idPattient }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        emergencyContact: "",

        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "mx",

        name: "",
        lastName: "",
        gender: "male",
        religion: "",
        birthdate: Date,
        civilstatus: "single",
        ocupation: "",
        bloodType: "",
        age: "",
        curp: "",
      }}
      validate={(values: any) => {
        // const errors = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        // return errors;
      }}
      onSubmit={(values: any, { setSubmitting }: any) => {
        dispatch(setLoadder(true));
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
        // notifySuccess();
        console.log("hola");
        
        updatePatient(patient, idPattient).then(function (response) {
          if (response?.success) {
            // console.log(response);
            dispatch(setLoadder(false));
            dispatch(
              setToast({
                active: true,
                type: "success",
                msj: "Patient has successfully registered",
              })
            );
            setOpen(false);
            router.push("/patients/list");
          } else {
            dispatch(setLoadder(false));
            dispatch(
              setToast({
                active: true,
                type: "error",
                msj: response?.result,
              })
            );
            setOpen(false);
          }
          // router.push("/patients/list");
          // dispatch(setLoadder(false));
          // window.location = "/patients/list" as any;
          // router.push("/patients/list");
        });
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
        /* and other goodies */
      }) => (
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

          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            color="primary"
            // disabled={!(dirty && isValid)}
          >
            Edit
          </Button>
          {/* <Button
            variant="contained"
            color="error"
            sx={{
              ml: 1,
            }}
          >
            Cancel
          </Button> */}
        </form>
      )}
    </Formik>
  );
};

export default EditPatientForm;
