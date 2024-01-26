import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiClientInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9c3fe5e4931846fd970e78e395ac1a64",
  },
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return apiClientInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
