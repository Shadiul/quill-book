import axios, { AxiosError } from "axios";

const API_URL = "/";

// common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const PublicRequest = axios.create({ baseURL: API_URL });

export default PublicRequest;

export const axiosErrorHandler = (error: any, customErrMessage?: string) => {
  if (axios.isAxiosError(error)) {
    // can access response property
    throw new Error(error.message);
  } else {
    // other errors
    throw new Error(customErrMessage ?? "Something went wrong");
  }
};
