import React from 'react';
import s from './Footer.module.scss';
import styled from "styled-components";


const Footer = () => {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>Telephone Number</li>
                            <li>Mail</li>
                            <li>Telegram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
  background: var(--mainDark);
  padding: 1rem;
  color: var(--mainWhite);
}
.footer-bottom {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
ul li a {
  color: var(--mainWhite);
}
ul li a:hover {
  color: var(--mainLightGrey);
}
`;

