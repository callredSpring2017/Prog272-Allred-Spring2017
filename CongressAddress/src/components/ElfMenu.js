import React, {Component} from 'react';
import '../css/App.css';
/*
import {
    Link
} from 'react-router-dom';
*/
// eslint-disable-next-line
import { Navbar, Nav, MenuItem, NavDropdown, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class ElfMenu extends Component {

    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><a><img src="../images/logo.svg" className="img-fluid" alt="Responsive Logo" /></a></LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to='/'><NavItem>Address Show</NavItem></LinkContainer>
                    <LinkContainer to='/edit'><NavItem>Address Edit</NavItem></LinkContainer>
                    <LinkContainer to='/small'><NavItem>Small Numbers</NavItem></LinkContainer>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <LinkContainer to='/edit'><NavItem>Address Edit</NavItem></LinkContainer>
                        <LinkContainer to='/small'><NavItem>Small Numbers</NavItem></LinkContainer>
                        <MenuItem divider />
                    </NavDropdown>
                </Nav>
            </Navbar>
        );

        return (
            <div>
                { navbarInstance }
            </div>
        );
    }
}

export default ElfMenu;