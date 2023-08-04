import { ToastContainer, toast } from "react-toastify";

export function notify(props) {
  const { data, statusType } = props;
  const toasts = {
    success: toast.TYPE.SUCCESS,
    error: toast.TYPE.ERROR,
    waring: toast.TYPE.WARNING,
    info: toast.TYPE.INFO,
  };
  const toastType = toasts[statusType];
  if (toastType && toastType !== undefined) {
    toast(data, {
      type: toastType,
    });
  }
}

export default function Toast() {
  return (
    <ToastContainer
      pauseOnHover={true}
      draggable={false}
      theme="colored"
      hideProgressBar={true}
      closeOnClick={false}
    />
  );
}
