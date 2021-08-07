import React, { useState } from 'react';
import {
    Collapse,
    Input,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Link} from "react-router-dom";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCity, faNewspaper, faIdCard, faHamburger, faBusAlt} from '@fortawesome/free-solid-svg-icons'




const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" expand="md" dark>
                <div className="container">
                    <Nav right>
                        <Link className="text-uppercase text-center ml-4 text-light" to="/">
                            <FontAwesomeIcon  icon={faCity} size={"lg"} />
                        </Link>
                    </Nav>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto">
                            <NavItem>
                                <Link className="text-uppercase text-center ml-4 text-light" to="/home/">
                                    <FontAwesomeIcon  icon={faHome} /> Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="text-uppercase text-center ml-4 text-light" to="/news/">
                                    <FontAwesomeIcon  icon={faNewspaper} /> News
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="text-uppercase text-center ml-4 text-light" to="/transport/">
                                    <FontAwesomeIcon  icon={faBusAlt} /> Transport
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="text-uppercase text-center ml-4 text-light" to="/food/">
                                    <FontAwesomeIcon  icon={faHamburger} /> Food
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="text-uppercase text-center ml-4 text-light" to="/contact/">
                                    <FontAwesomeIcon  icon={faIdCard} /> Contact us
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav isOpen={isOpen}>
                            <div className="nav justify-content-end ml-4">
                                <NavItem>
                                    <Input className="my-2" type="search" name="search" id="searchExample" placeholder="Search" />
                                </NavItem>
                                <NavItem>
                                    <Button className="float-lg-right m-2">Search</Button>
                                </NavItem>
                            </div>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;
