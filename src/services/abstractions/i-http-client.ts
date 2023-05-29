import {IHttpParameters} from "../../utils/url-parameters-mapper";

export default interface IHttpClient {

    get<T>(url: URL, routeParameters?: IHttpParameters,
           queryParameters?: IHttpParameters): Promise<T>;

    post<T>(url: URL, body?: any, routeParameters?: IHttpParameters,
            queryParameters?: IHttpParameters): Promise<T>;

    put<T>(url: URL, body?: any, routeParameters?: IHttpParameters,
           queryParameters?: IHttpParameters): Promise<T>;

    delete<T>(url: URL, routeParameters?: IHttpParameters,
              queryParameters?: IHttpParameters): Promise<T>
}