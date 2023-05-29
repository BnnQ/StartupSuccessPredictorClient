import {FC, useEffect, useState} from "react";
import {Container, Row} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import ContentLoader from "react-content-loader";
import '../wwwroot/scss/Result.css';
import {useInjection} from "inversify-react";
import {SERVICE_KEYS} from "../service-keys";
import {IPredictorClient} from "../services/abstractions/i-predictor-client";
import {StartupHttpParameters} from "../models/startup-http-parameters";
import {IHttpParameters, UrlParametersMapper} from "../utils/url-parameters-mapper";

const Result : FC = () => {
    const location = useLocation();
    const queryParameters : IHttpParameters = UrlParametersMapper.getQueryParametersFromLocation(location);

    const [result, setResult] = useState<string>();
    const resultElement = result ? <h2><p className={`d-inline ${result === "successful" ? "text-success" : "text-danger"}`}>{result}</p>!</h2> : <ContentLoader width={190} height={40}>
        <rect x={0} y={0} rx={5} ry={5} width={190} height={40}></rect>
    </ContentLoader>

    const predictorClient : IPredictorClient = useInjection(SERVICE_KEYS.IPredictorClient);
    useEffect(() => {
        async function fetchData() {
            setResult(await predictorClient.getPrediction(queryParameters as StartupHttpParameters));
        }

        fetchData();
    }, [predictorClient, queryParameters]);

    return (
    <Container id={"body"} className={"min-vh-100 d-flex align-items-center justify-content-center"}>
        <Row className={"text-center"}>
            <h2 className={"text-black fw-bold mb-3"}>StartupPredictor<span>.ai</span> predicts that your startup will be...</h2>
            <div className={"d-flex justify-content-center align-items-center"}>
                {resultElement}
            </div>
            <div className={"mt-3"}>
                <Link to={"/fill-info"} className={"btn btn-lg btn-primary bg-gradient-primary p-3"}>
                    Make a new predict
                </Link>
            </div>
        </Row>
    </Container>);
};

export default Result;