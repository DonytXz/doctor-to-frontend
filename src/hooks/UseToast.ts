import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const useToast = ({ toastStore }: any):any => {
  const { t } = useTranslation();
  // const toastStore = customizer.toast;
  let notifyToast: any;
  let txtToast: any;
  if (toastStore.type == "success") {
    txtToast = t(`${toastStore.msj}`);
    return (() => toast.success(txtToast));
  } else if (toastStore.type == "error") {
    txtToast = t(`${toastStore.msj}`);
    return (() => toast.error(txtToast));
  }
};

export default useToast;
