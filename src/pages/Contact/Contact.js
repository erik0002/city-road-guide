import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    render (){
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                <div className="row">
                    <div className="col-md-7">
                        <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1tRfhnFaWk8Tmmtq_FekMLNUFpP1ZB5dS"
                            style={{
                                border: '0',
                                width: '100%',
                                height: '315px',
                                frameborder: '0'
                            }}
                            allowFullscreen
                        />
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Contact Us</strong></h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control"
                                placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control"
                                placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control"
                                placeholder="Phone"/>
                            </div>
                            <textarea
                                className="form-control"
                                cols="30" rows="5"
                                placeholder="Message"
                            />
                            <Link className="btn btn-outline-primary text-uppercase mt-1">
                                <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                                <i className="fab fa-telegram-plane"/>&nbsp;Send
                            </Link>
                        </form>
                    </div>
                </div>
              </div>
            </section>
        )
    }
}

export default Contact;
