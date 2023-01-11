import {
  IHttpClient,
  IHttpGETRequestParams,
  IHttpPOSTRequestParams,
} from '../../../infrastructure/interfaces/IHttpClient';
import axios, { AxiosStatic } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosHttpClient implements IHttpClient {
  private _axios: AxiosStatic = axios;

  constructor() {}

  public async get<T>(params: IHttpGETRequestParams): Promise<T> {
    const response = await this._axios.get(params.url);
    return response.data;
  }

  public async post<T>(params: IHttpPOSTRequestParams): Promise<T> {
    const response = await this._axios.post(params.url, params.body);
    return response.data;
  }
}
