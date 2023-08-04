import { notify } from "../components/common/toast/toast";

/**
 *
 * @param {Object} err
 * @returns {String}
 */
export const handleError = (err) => {
  let msg = "Something went wrong!";
  if (err.response) {
    if (err.response.data.error) {
      msg = err.response.data.error;
    } else {
      msg = "Something went wrong!";
    }
  } else {
    msg = err.message;
  }
  notify({
    data: msg,
    statusType: "error",
  });
};
