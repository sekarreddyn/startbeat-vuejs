let config = {};

if (process.NODE_ENV === "development") {
  config = {
    apiEndpoint: "https://dev.starbeat.in",
    apiUrl: "api/v1/"
  };
} else {
  config = {
    apiEndpoint: "https://dev.starbeat.in",
    apiUrl: "api/v1/"
  };
}

export const appConfig = {
  ...config
};
