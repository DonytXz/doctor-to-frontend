import { Alert, Button } from "@mui/material";
import ParentCard from "../shared/ParentCard";
import { Formik } from "formik";
import { storePatient } from "../../services/Patients";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import FormSections from "./FormSections";
import ChildForm from "./forms/ChildForm";
import { storeProcedding } from "src/services/Proceedings";
import { useDispatch } from "src/store/Store";
import { setLoadder, setToast } from "src/store/customizer/CustomizerSlice";
import { useRouter } from "next/router";

const ProceedingsForm = () => {
  const { t } = useTranslation();
  const txtSuccess = t(`Proceedings has successfully registered`);
  const notifySuccess = () => toast.success(txtSuccess);
  // console.log("render ProceedingsForm");
  //HOC component
  const AppHocFormComponent = FormSections(ChildForm);
  //HOC component
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Patient Form */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Formik
        initialValues={{
          patient: "",
          familyHistory: {
            family: "",
            diabetes: "",
            hypertension: "",
            autoimmuneDiseases: "",
          },

          pathologicalHistory: {
            diabetesMellitus: "",
            arterialHypertension: "",
            endocrinologicalDiseases: "",
            diseasesAutoimmune: "",
            vih: "",
            herpes: "",
            bloodTransfusions: "",
            trauma: "",
            fracture: "",
            hospitalizations: "",
            previousSurgeries: "",
            hepatitis: "",
            cancer: "",
            epilepsy: "",
            allergies: "",
            others: "",
            doyouSmoke: "",
            howMany: "",
            adictions: "",
            whichOne: "",
            drinkAlcohol: "",
            alchohol: "",
            bloodPhobia: "",
            needlePhobia: "",
            fainting: "",
            medicines: "",
            medicineName: "",
            bruises: "",
            tanningbed: "",
            anesthesia: "",
            anesthesiaProblems: "",
            problem: "",
            vaccine: "",
            vaccineName: "",
            infections: "",
            infectionName: "",
            medicalTreatment: "",
            treatment: "",
            exercise: "",
            typeof: "",
          },
          gynecologistsHistory: {
            pregnant: "",
            mernacaNo: "",
            fum: "",
            menstrualrhythm: "",
            fup: "",
            g: "",
            p: "",
            a: "",
            c: "",
            contraceptivemethod: "",
          },

          solarProtection: {
            solarExposition: "",
            time: "",
            usesolarProtection: "",
            brand: "",
            fps: "",
          },

          consultReason: "",
          other: "",
          previousTreatments: {
            procedure: "",
            product: "",
            applicationDate: "",
          },

          physicalExam: {
            flitzpatrick: "",
            glogau: "",
            typeSkin: "",
            typeFace: "",
            dermatologicallesions: "",
            lesion: "",
            lesionType: "",
            location: "",
          },

          habitusExterior: {
            patientCondition: "",
            constitution: "",
            conformation: "",
            attitude: "",
            facies: "",
            anormalMovements: "",
            gear: "",
            consciousness: "",
            others: "",
          },

          vitalSigns: {
            fc: "",
            ta: "",
            temp: "",
            weight: "",
            size: "",
            imc: "",
          },
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values, "values");
          storeProcedding(values).then(function (response) {
            // console.log(response, "responsea");
            if (response?.success) {
              dispatch(setLoadder(false));
              dispatch(
                setToast({
                  active: true,
                  type: "success",
                  msj: "Patient has successfully registered",
                })
              );
              router.push("/patients/list");
            } else {
              dispatch(setLoadder(false));
              dispatch(
                setToast({
                  active: true,
                  type: "error",
                  msj: response?.result.message,
                })
              );
            }
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
          dirty,
          isValid,
        }) => (
          <ParentCard
            title="Proceedings Formulary"
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
              <AppHocFormComponent
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

export default ProceedingsForm;
