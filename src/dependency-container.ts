import {Container} from "inversify";
import IHttpClient from "./services/abstractions/i-http-client";
import {AxiosHttpClient} from "./services/axios-http-client";
import {IPredictorClient} from "./services/abstractions/i-predictor-client";
import {AzureMlPredictorClient} from "./services/azure-ml-predictor-client";
import {SERVICE_KEYS} from "./service-keys";

export const container = new Container();
container.bind<IHttpClient>(SERVICE_KEYS.IHttpClient).to(AxiosHttpClient);
container.bind<IPredictorClient>(SERVICE_KEYS.IPredictorClient).to(AzureMlPredictorClient);

