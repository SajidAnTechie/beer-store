import axios from "axios";
import config from "../config";

const instance = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

/**
 *
 * @param {String} url The url fro the api request (without the base)
 * @param {Object} [config]
 * @param {Object} [config.params] An object of queries that will be added to
 * @param {Boolean} [config.accessToken] Whether or not to include
 * access-token header
 * @returns {Promise}
 */
function get(url, { params = {}, responseType = "json", headers = {} } = {}) {
  return instance({
    url,
    params,
    responseType,
    method: "get",
    headers: { ...headers },
  }).then((response) => response);
}

const http = {
  get,
};

export default http;
