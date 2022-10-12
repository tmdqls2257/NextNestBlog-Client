import axios, { AxiosRequestConfig } from "axios";

export enum MethodType {
  get = "get",
  post = "post",
  patch = "patch",
  delete = "delete",
}
interface ICustomAxios<D = any> {
  request: (
    url: string | undefined,
    method: MethodType,
    data?: D,
    params?: any
  ) => Promise<AxiosRequestConfig>;
}
class CustomAxios implements ICustomAxios {
  private static instance: CustomAxios;
  private baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request(
    url: string | undefined,
    method: MethodType,
    data?: any,
    params?: any
  ) {
    try {
      // const res: AxiosResponse = await axios(`${this.baseURL}${url}`, {
      //   method,
      //   data: {
      //     data,
      //   },
      //   ...options,

      //   headers: {
      //     ...options.headers,
      //   },
      //   withCredentials: true,
      // });
      // const res = await axios<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>{}
      const res = await axios.request({
        url,
        baseURL: this.baseURL,
        method,
        data,
        params,
        withCredentials: true,
      });

      if (res.status > 299 || res.status < 200) {
        const message: string =
          res.data && res.data.message
            ? res.data.message
            : "Something went wrong";
        const error = new Error(message);
        if (res.status === 401) {
          throw error;
        }
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  public static getInstance(baseURL: string): CustomAxios {
    if (!CustomAxios.instance) {
      CustomAxios.instance = new CustomAxios(baseURL);
    }
    return CustomAxios.instance;
  }
}

const NetworkService = CustomAxios.getInstance(
  `${process.env.NEXT_PUBLIC_SERVER}`
);

export default NetworkService;
