import React, {Component} from 'react';
import '../css/App.css';
/*
import {
    Link
} from 'react-router-dom';
*/
// eslint-disable-next-line
import { Navbar, Nav, MenuItem, NavDropdown, NavItem   } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class ElfMenu extends Component {

    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><a><img src="http://localhost:3000/CAhome.png" className="img-thumbnail" alt="Responsive Logo" /></a></LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <IndexLinkContainer to='/'><NavItem>Address Show</NavItem></IndexLinkContainer>
                    <IndexLinkContainer to='/edit'><NavItem>Address Edit</NavItem></IndexLinkContainer>
                    <IndexLinkContainer to='/small'><NavItem>Small Numbers</NavItem></IndexLinkContainer>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <IndexLinkContainer to='/edit'><NavItem>Address Edit</NavItem></IndexLinkContainer>
                        <IndexLinkContainer to='/small'><NavItem>Small Numbers</NavItem></IndexLinkContainer>
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