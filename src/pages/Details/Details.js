import React, {Component} from 'react';
import { InfoConsumer} from "../../components/Context/context";
import {} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faReddit, faTwitter, faGooglePlus, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Reviews from "../../components/Reviews/Reviews";

class Details extends Component {
    render (){
        return (
            <div>
                <InfoConsumer>
                    {data => {
                        const {
                            id,
                            headerTitle,
                            headerSubTitle,
                            headerText,
                            img,
                            title,
                            maps,
                            description,
                        } = data.detailInfo;

                        return (
                            <React.Fragment>
                                <HeaderDetails className="container-fluid align-items-center">
                                    <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                    <h4 className="display-5">{headerTitle}</h4>
                                    <p>{headerText}</p>
                                    <div className="container mt-3">
                                        <div className="row justify-content-center">
                                            <div className="col-2">
                                                <FontAwesomeIcon className="iconFont"  icon={faFacebookF} />
                                            </div>
                                            <div className="col-2">
                                                <FontAwesomeIcon className="iconFont"  icon={faTwitter} />
                                            </div>
                                            <div className="col-2">
                                                <FontAwesomeIcon className="iconFont"  icon={faGooglePlus} />
                                            </div>
                                            <div className="col-2">
                                                <FontAwesomeIcon className="iconFont"  icon={faReddit} />
                                            </div>
                                            <div className="col-2">
                                                <FontAwesomeIcon className="iconFont"  icon={faInstagram} />
                                            </div>
                                            <div className="col-2">
                                                <FontAwesomeIcon className="iconFont"  icon={faTelegram} />
                                            </div>
                                        </div>
                                    </div>
                                </HeaderDetails>
                                <div className="container">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-aboutPlace-tab" data-toggle="tab"
                                               href="#nav-aboutPlace" role="tab" aria-controls="nav-aboutPlace"
                                               aria-selected="true">About Place</a>
                                            <a className="nav-item nav-link" id="reviews-tab" data-toggle="tab"
                                               href="#nav-reviews" role="tab" aria-controls="nav-reviews"
                                               aria-selected="false">Reviews</a>
                                            <a className="nav-item nav-link" id="nav-map-tab" data-toggle="tab"
                                               href="#nav-map" role="tab" aria-controls="nav-map"
                                               aria-selected="false">Map</a>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        {/*About Place Tabe*/}
                                        <div
                                            id="nav-aboutPlace"
                                            className="tab-pane fade show active text-center mt-5"
                                            role="tabpanel"
                                            aria-labelledby="#nav-aboutPlace-tab"
                                        >
                                                <h2 className="mb-3">{title}</h2>
                                                <p>{description}</p>
                                                <img
                                                    src={img}
                                                    alt={title}
                                                    className="img-thumbnail img-fluid"/>
                                        </div>
                                        {/*Reviews*/}
                                        <div
                                            id="nav-reviews"
                                            className="tab-pane fade text-center mt-5"
                                            role="tabpanel"
                                            aria-labelledby="nav-reviews-tab"
                                        >
                                            <Reviews/>
                                        </div>
                                        {/*Map*/}
                                        <div
                                            id="nav-map"
                                            className="tab-pane fade"
                                            role="tabpanel"
                                            aria-labelledby="nav-map-tab"
                                        >
                                            <iframe
                                                src={maps}
                                                style={{
                                                    border: '0',
                                                    height: '20.125rem',
                                                    width: '100%',
                                                    frameBorder: '0'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </InfoConsumer>
            </div>
        )
    }
}

export default Details;


const HeaderDetails = styled.header `
    background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
    height: 100vh;
    text-transform: uppercase;
    color: var(--mainWhite);
    text-align: center;
  
    h1 {
      padding-top: 10%;
      color: var(--mainDark);
    }
  
    h4 {
      color: var(--mainDark);
    }
  
    p {
      padding-left: 10%;
      padding-right: 10%;
      margin-bottom: 10%;
      color: var(--mainDark);
    }

    .iconFont {
      font-size: 1.875rem;
      color: var(--mainDark);
    }
    .iconFont:hover {
      color: var(--mainBlue);
      cursor: pointer;
    }
  
    .nav-item {
      height: 18.75rem;
    }
  
    @media(max-width: 760px) {
      h1 {
        color: var(--mainWhite);
      },
      h4 {
        color: var(--mainWhite);
        font-size: 1rem;
      }
    }
`;
