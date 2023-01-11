export interface IHttpClient {
  get<T>(params: IHttpGETRequestParams): Promise<T>;
  post<T>(params: IHttpPOSTRequestParams): Promise<T>;
}

export interface IHttpGETRequestParams {
  url: string;
  queryStringData?: { property: string; value: string }[];
  headers?: { header: string; value: string }[];
}

export interface IHttpPOSTRequestParams {
  url: string;
  body: any;
  headers?: { header: string; value: string }[];
}
