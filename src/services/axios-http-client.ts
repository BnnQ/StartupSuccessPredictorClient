import axios from "axios";
import IHttpClient from "./abstractions/i-http-client";
import {IHttpParameters, UrlParametersMapper} from "../utils/url-parameters-mapper";
import {injectable} from "inversify";

@injectable()
export class AxiosHttpClient implements IHttpClient {
    async get<T>(url: URL, routeParameters?: IHttpParameters,
                 queryParameters?: IHttpParameters): Promise<T> {
        const mappedUrl: string = UrlParametersMapper.mapRouteAndQueryParametersToUrl(url,
                                                                                      routeParameters,
                                                                                      queryParameters);

        const response = await axios.get<T>(mappedUrl);
        return response.data;
    }

    async post<T>(url: URL, body?: any, routeParameters?: IHttpParameters,
            queryParameters?: IHttpParameters): Promise<T> {
        const mappedUrl : string = UrlParametersMapper.mapRouteAndQueryParametersToUrl(url, routeParameters, queryParameters);

        const response = await axios.post<T>(mappedUrl, body);
        return response.data;
    }

    async put<T>(url: URL, body?: any, routeParameters?: IHttpParameters,
                 queryParameters?: IHttpParameters): Promise<T> {
        const mappedUrl: string = UrlParametersMapper.mapRouteAndQueryParametersToUrl(url,
                                                                                      routeParameters,
                                                                                      queryParameters);

        const response = await axios.put<T>(mappedUrl, body);
        return response.data;
    }

    async delete<T>(url: URL, body?: any, routeParameters?: IHttpParameters,
                    queryParameters?: IHttpParameters): Promise<T> {
        const mappedUrl: string = UrlParametersMapper.mapRouteAndQueryParametersToUrl(url,
                                                                                      routeParameters,
                                                                                      queryParameters);

        const response = await axios.delete<T>(mappedUrl);
        return response.data;
    }

}