import { notify } from "../components/common/toast/toast";

const GENERIC_ERROR = "Oops! Something went wrong";

/**
 *
 * @param {Object} err
 * @returns {String}
 */
export const handleError = (err) => {
  let msg = GENERIC_ERROR;
  if (err.response) {
    msg = err?.response?.data?.error || GENERIC_ERROR;
  } else {
    msg = err.message;
  }
  notify({
    data: msg,
    statusType: "error",
  });
};
