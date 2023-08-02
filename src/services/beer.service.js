import config from "../config";
import http from "../utils/http";

export async function fetchAllBeers(filters) {
  const { page, perPage } = filters;
  const { data } = await http.get(config.apiEndPoint.beer.fetchBeers, {
    params: {
      page,
      per_page: perPage,
    },
  });
  return data;
}
