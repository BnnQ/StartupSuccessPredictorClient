import {IHttpParameters} from "../utils/url-parameters-mapper";

export class StartupHttpParameters implements IHttpParameters {
    [key: string]: string | string[] | number;

    constructor(public category : string, public main_category : string, public currency : string, public deadline : string, public goal : number, public launched : string, public backers : number, public country : string) {

    }

}