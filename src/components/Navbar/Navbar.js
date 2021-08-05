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
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar>
                            <NavItem right>
                                <NavLink className="text-uppercase text-center ml-4" href="/main/">
                                    <FontAwesomeIcon  icon={faCity} size={"lg"} />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-uppercase text-center ml-4" href="/home/">
                                    <FontAwesomeIcon  icon={faHome} /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-uppercase text-center ml-4" href="/news/">
                                    <FontAwesomeIcon  icon={faNewspaper} /> News
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-uppercase text-center ml-4" href="/transport/">
                                    <FontAwesomeIcon  icon={faBusAlt} /> Transport
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-uppercase text-center ml-4" href="/food/">
                                    <FontAwesomeIcon  icon={faHamburger} /> Food
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-uppercase text-center ml-4" href="/contact/">
                                    <FontAwesomeIcon  icon={faIdCard} /> Contact us
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
                <div className="nav justify-content-end">
                      <Nav>
                          <Input type="search" name="search" id="searchExample" placeholder="Search" />
                      </Nav>
                      <Nav>
                          <Button className="float-lg-right">Search</Button>
                      </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;
