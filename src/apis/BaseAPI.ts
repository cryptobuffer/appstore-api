import Axios, { AxiosInstance, AxiosResponse, AxiosStatic } from 'axios';
import { Client } from '../index';
export default abstract class BaseAPI {
  private client: Client;
  protected axios: AxiosInstance;
  constructor(client: Client) {
    this.client = client;
    this.axios = Axios.create({
      baseURL: this.client.BASE_URL
    });
    this.axios.interceptors.request.use(
      (config) => {
        config.headers = this.client.header();
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
