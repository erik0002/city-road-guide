import React, {Component} from 'react';
import {InfoConsumer} from "../Context/context";
import { Link } from 'react-router-dom';

class Info  extends Component {
    render (){

        const { id, headerTitle, headerSubTitle, headerText, img } = this.props.item;

        return (
            <InfoConsumer>
                {
                    data => (
                        <div key={id} className="col-10 col-md-6 col-lg-4 mx-auto, mb-5">
                            <div className="card" style={{width: '18rem'}}>
                                <img src={img} alt={headerTitle} className="card-img-tab"/>
                                <div className="card-body">
                                    <h3 className="card-title text-uppercase">{headerTitle}</h3>
                                    <h5 className="card-title">{headerSubTitle}</h5>
                                    <p className="card-text">{headerText}</p>
                                    <Link
                                        onClick={() => data.handleDetail(id)}
                                        to="/details"
                                        className="btn btn-outline-primary text-uppercase"
                                    >
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </InfoConsumer>

        )
    }
}

export default Info;

