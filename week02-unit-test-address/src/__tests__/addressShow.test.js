/**
 * Created by bcuser on 4/24/17.
 */
import React from 'react';
import {shallow} from 'enzyme';
import AddressShow from "../components/address-show";

describe('Address-Show Test Suite', function () {

    let address = {};
    let quiet = true;

    beforeEach(function () {
        address = address[0];
    });

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };

    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<AddressShow />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        // const firstName = wrapper.find('p').last().debug();
        // console.log(firstName);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default first name', () => {
        const wrapper = shallow(<AddressShow />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default last name', () => {
        const wrapper = shallow(<AddressShow />);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default streetAddress', () => {
        const wrapper = shallow(<AddressShow />);
        const welcome = <p className="App-intro">streetAddress: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default city', () => {
        const wrapper = shallow(<AddressShow />);
        const welcome = <p className="App-intro">city: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default state', () => {
        const wrapper = shallow(<AddressShow />);
        const welcome = <p className="App-intro">State: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default zipCode', () => {
        const wrapper = shallow(<AddressShow />);
        const welcome = <p className="App-intro">zipCode: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});