const config = {
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  apiEndPoints: {
    beer: {
      fetchBeers: "/beers",
    },
  },
};

export default config;
