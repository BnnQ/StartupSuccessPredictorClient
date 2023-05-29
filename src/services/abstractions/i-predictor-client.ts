import {StartupHttpParameters} from "../../models/startup-http-parameters";

export interface IPredictorClient {
    getPrediction(startupParameters : StartupHttpParameters) : Promise<string>;
}