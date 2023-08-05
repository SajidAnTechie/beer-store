import config from "../config";
import http from "../utils/http";

export async function fetchAllBeers(filters) {
  const { data } = await http.get(config.apiEndPoints.beer.fetchBeers, {
    params: {
      ...filters,
    },
  });
  return data;
}
