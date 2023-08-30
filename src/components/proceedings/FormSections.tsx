import { Alert, Grid } from "@mui/material";
import React, { ElementType } from "react";
import { useTranslation } from "react-i18next";
import { whiteSpaceBtweenCapitalized } from "src/utils/Text";

function FormSections(WrappedComponent: ElementType) {
  const Wrapper = (props: any) => {
    const { t } = useTranslation();
    const formGrups = Object.entries(props.values);
    //Use memo to prevent renders
    const memoList = React.useMemo(() => {
      return formGrups.map((formGrup: any, index: number) => {
        const typof: string | object = typeof formGrup[1];
        const valueIsObj = typof.toString() == "object";
        const mainGroupKey = formGrup[0];
        const mainGroupVal = formGrup[1];
        const title = t(`${whiteSpaceBtweenCapitalized(mainGroupKey)}`);
        // console.log({ valueIsObj }, { mainGroupKey }, { mainGroupVal });

        if (valueIsObj) {
          const objGroup = Object.entries(mainGroupVal);
          return (
            <div key={index}>
              <Alert sx={{ textTransform: "capitalize" }} severity="info">
                {title}
              </Alert>
              <Grid container spacing={3} mb={3} mt={1}>
                {/* Input items  */}
                {objGroup.map((objGroupElement: any, idx: number) => {
                  const secondaryGroupKey = objGroupElement[0];
                  const secondaryGroupVal = objGroupElement[1];
                  const titleObj = t(
                    `${whiteSpaceBtweenCapitalized(secondaryGroupKey)}`
                  );

                  return (
                    <WrappedComponent
                      key={idx}
                      {...props}
                      title={titleObj}
                      objKey={secondaryGroupKey}
                      objValue={secondaryGroupVal}
                    />
                  );
                })}
                {/* Input items */}
              </Grid>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Alert sx={{ textTransform: "capitalize" }} severity="info">
                {title}
              </Alert>
              <Grid container spacing={3} mb={3} mt={1}>
                <WrappedComponent
                  {...props}
                  title={title}
                  isOneItem={true}
                  objKey={mainGroupKey}
                  objValue={mainGroupVal}
                />
              </Grid>
            </div>
          );
        }
      });
    }, []);
    console.log("render FormSections");

    return <>{memoList}</>;
  };

  return Wrapper;
}

export default FormSections;
