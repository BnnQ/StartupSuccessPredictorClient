import {FC} from "react";
import {Container, Row} from "reactstrap";
import '../wwwroot/scss/Home.css';
import {Link} from "react-router-dom";

const Home: FC = () => {
    return (
    <Container id={"body"} className={"min-vh-100 d-flex align-items-center justify-content-center"}>
        <Row className={"intro"}>
            <div className={"intro-overline"}>
                For Everyone
            </div>
            <h1 className={"intro-title text-black fw-bold mb-3"}>Predict Success of Your Startup in 1 Minute</h1>
            <div className={"intro-description-container d-flex flex-column align-items-center"}>
                <div className={"intro-description"}>
                    <p className={"mb-3"} style={{fontSize: "19px"}}>
                        StartupPredictor.ai is your simple solution for predicting startup success objectively. The predict is given on the basis of data from hundreds of thousands of successful and failed real startups.
                    </p>
                </div>
            </div>
            <div className={"divider-container"}>
                <div className={"divider"}></div>
            </div>
            <div>
                <Link to={"/fill-info"} className={"btn btn-lg btn-primary bg-gradient-primary p-3"}>
                    Predict success of your startup now
                </Link>
            </div>
        </Row>
    </Container>);
};

export default Home;