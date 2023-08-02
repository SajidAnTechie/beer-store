const config = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  apiEndPoint: {
    beer: {
      fetchBeers: "/beers",
    },
  },
};

export default config;
