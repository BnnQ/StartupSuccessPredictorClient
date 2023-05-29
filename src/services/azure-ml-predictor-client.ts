import {IPredictorClient} from "./abstractions/i-predictor-client";
import {StartupHttpParameters} from "../models/startup-http-parameters";
import {inject, injectable} from "inversify";
import IHttpClient from "./abstractions/i-http-client";
import {SERVICE_KEYS} from "../service-keys";

interface IResponse {
    Results: string[]
}

@injectable()
export class AzureMlPredictorClient implements IPredictorClient {
    @inject(SERVICE_KEYS.IHttpClient) private httpClient!: IHttpClient;

    async getPrediction(startupParameters: StartupHttpParameters): Promise<string> {
        const requestBody = {
            Inputs: {
                data: [startupParameters]
            }, GlobalParameters: {
                method: "predict"
            }
        }

        const azureMlEndpoint: string = (process.env.REACT_APP_AZURE_ML_PREDICTOR_ENDPOINT as string);
        const response = await this.httpClient.post<IResponse>(
            new URL(azureMlEndpoint), requestBody);

        return response.Results[0];
    }

}