# Final

Review of the Final Projects.

## General Comments

You have had a good quarter. You managed to gain at least an intermediate knowledge or a at least a good foothold on most of the core subjects covered in this course including:

- Linux basics
- Git and branches
- Parsing and working with JSON data stored in arrays and objects.
- React
- React Native
- Test Driven Development
- Rest calls to a server (**CongressAddress** and/or **CongressNative** talks to **CongressServer**)
- Database connectivity with Mongo DB

**CongressAddress** gets data from a JSON file rather than the database, but your native app does hit the database.

There were 13 unit tests passing and 20 failing.

I think you stripped too much out of your menu and lost support for mobile. Try something like this:

```javascript
import React, {Component} from 'react';
import { Nav, Navbar, NavItem   } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import '../css/App.css';

class ElfMenu extends Component {

    render() {
        const homeImage = (
            <img src='http://localhost:3000/home.png' className='img-thumbnail' alt='Responsive Logo' />
        );

        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer exact to='/'><NavItem>{homeImage}</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer exact to='/'><NavItem>Address Show</NavItem></IndexLinkContainer>
                        <IndexLinkContainer to='/edit'><NavItem>Address Edit</NavItem></IndexLinkContainer>
                        <IndexLinkContainer to='/small-numbers'><NavItem>Show Number</NavItem></IndexLinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
                <div>
                    {navbarInstance}
                </div>
        );
    }
}

export default ElfMenu;
```

## Core Programs

- CongressAddress runs
- CongressServer runs
- CongressNative runs
  - And actually works! I get Lamar back from the database.
- Heroku runs

## Data

- CongressAddress talks to CongressServer
- CongressServer does not talks to MongoDb
  - You are using **/address.json** in **DataLoader.loadAddresses** rather than **/all-data**
- Edit Data
  - Doesn't quite work.

My **OnNameChange**, for handling edits, ended up looking like this:

```javascript
onNameChange(event) {
    logger.log('on name change');
    const address = getByIndex(this.state.addressIndex);
    switch (event.target.id) {
        case 'elfFN':
            address.firstName = event.target.value;
            break;
        case 'elfLN':
            address.lastName = event.target.value;
            break;
        default:
            address.zip = 'OH NO BAD CASE';
    }
    saveByIndex(address, this.state.addressIndex);
    this.setState({
        address: address
    });
};
```

The code shown above is incomplete in that it only handles first and last names, but it does handle the first and last names correctly.

This code from **DataMaven** is the client side code that allowed me to save the changes to the server:

```javascript
dbAddressSave() {
    const address = getByIndex(this.state.addressIndex);
    const url = '/update' +
        '?id=' + address._id +
        '&address=' + JSON.stringify(address);
    fetch(url)
        .then((data) => data.json())
        .then(function(data) {
            logger.log(JSON.stringify(data, null, 4));
        }).catch(function(err) {
            const message = 'Either could not insert ' +
                'data or could not display ' +
                'results after inserting data\n';
            alert(message + err);
            logger.log(err);
        });
}
```

## Summary
