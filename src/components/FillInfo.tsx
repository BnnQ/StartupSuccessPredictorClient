import {Children, FC, useRef, useState} from "react";
import {Col, Container, Input, Row} from "reactstrap";
import Slider from 'react-slick';
import '../wwwroot/scss/FillInfo.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {IHttpParameters, UrlParametersMapper} from "../utils/url-parameters-mapper";
import {StartupHttpParameters} from "../models/startup-http-parameters";

const FillInfo: FC = () => {
    const navigate = useNavigate();
    const sliderRef = useRef<Slider>(null);
    const [isButtonVisible, setButtonVisibility] = useState<boolean>(false);
    const [category, setCategory] = useState<string>('');
    const [mainCategory, setMainCategory] = useState<string>('');
    const [currency, setCurrency] = useState<string>('');

    const datetimePattern = /^\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}:\d{2}$/;
    const [deadline, setDeadline] = useState<string>('0000.00.00 00:00:00');
    const [launched, setLaunched] = useState<string>('0000.00.00 00:00:00');

    const [goal, setGoal] = useState<number>(1);
    const [numberOfBackers, setNumberOfBackers] = useState<number>(1);
    const [country, setCountry] = useState<string>('');

    const checkIfTheCurrentSlideIsLast = (currentSlide: number) => {
        const length: number = Children.count(sliderRef.current?.props.children) - 2;

        if (currentSlide === length) {
            let url: string = '/result';
            const parameters: IHttpParameters = new StartupHttpParameters(category, mainCategory, currency, deadline, goal, launched, numberOfBackers, country);

            url = UrlParametersMapper.mapQueryParametersToUrl(url, parameters);
            navigate(url);
        }

    };

    return (
        <Container className={"d-flex flex-column justify-items-center min-vh-100"}>
            <Row className={"flex-grow-1 justify-content-center align-items-center"}>
                <Col>
                    <div>
                        <Slider ref={sliderRef} className={'input-slider'} dots={false} infinite={false} speed={500}
                                slidesToShow={1} slidesToScroll={1} draggable={false}
                                beforeChange={checkIfTheCurrentSlideIsLast}>
                            <div>
                                <h1 className={"text-center"}>Tell us about your startup <span>category</span></h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"Restaurants/Product Design/Nonfiction..."}
                                           value={category} tabIndex={-1} onChange={event => {
                                        setCategory(event.target.value);
                                        setButtonVisibility(event.target.value.length > 0)
                                    }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Tell us about <span>main category</span> of your startup
                                </h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"Food/Design/Publishing..."} value={mainCategory} tabIndex={-1}
                                           onChange={event => {
                                               setMainCategory(event.target.value);
                                               setButtonVisibility(event.target.value.length > 0)
                                           }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Tell us what <span>currency</span> does your startup use
                                </h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"USD/CAD/UAH..."} value={currency} tabIndex={-1}
                                           onChange={event => {
                                               setCurrency(event.target.value);
                                               setButtonVisibility(event.target.value.length > 0)
                                           }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Tell us when fundraising for a startup
                                    was <span>launched</span></h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"2025.09.23 14:35:20"} value={launched} tabIndex={-1}
                                           onChange={event => {
                                               setLaunched(event.target.value);
                                               setButtonVisibility(datetimePattern.test(event.target.value))
                                           }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Tell us when your startup's <span>deadline</span> is</h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"2025.09.23 14:35:20"} value={deadline} tabIndex={-1}
                                           onChange={event => {
                                               setDeadline(event.target.value);
                                               setButtonVisibility(datetimePattern.test(event.target.value))
                                           }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Tell us fundraising <span>goal</span> amount of your
                                    startup</h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"15999"} value={goal} tabIndex={-1} onChange={event => {
                                        setGoal(+event.target.value);
                                        setButtonVisibility(+event.target.value > 0)
                                    }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Tell us how many <span>backers</span> does your startup
                                    have</h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"150"} value={numberOfBackers} tabIndex={-1}
                                           onChange={event => {
                                               setNumberOfBackers(+event.target.value);
                                               setButtonVisibility(+event.target.value > 0)
                                           }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Tell us about target <span>country</span> of your startup
                                    have</h1>
                                <div className={"slider-input-container"}>
                                    <Input type={"text"} placeholder={"US/GB/UK..."} value={country} tabIndex={-1}
                                           onChange={event => {
                                               setCountry(event.target.value);
                                               setButtonVisibility(event.target.value.length > 0)
                                           }}></Input>
                                </div>
                            </div>
                            <div>
                                <h1 className={"text-center"}>Calculating the result...</h1>
                            </div>
                        </Slider>
                    </div>
                    <div className={"mt-3 d-flex justify-content-center"}>
                        <button
                            className={`btn btn-lg btn-primary bg-gradient-primary d-flex align-items-center justify-content-center ${isButtonVisible ? "" : "disabled"}`}
                            onClick={() => sliderRef.current?.slickNext()}>
                            Next
                            <FontAwesomeIcon icon={faChevronRight} className={"fa-xs ms-2"}
                                             style={{verticalAlign: "middle"}}></FontAwesomeIcon>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FillInfo;