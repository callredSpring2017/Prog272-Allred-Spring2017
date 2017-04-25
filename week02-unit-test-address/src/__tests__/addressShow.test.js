/**
 * Created by bcuser on 4/24/17.
 */
import React from 'react';
//import ReactDOM from 'react-dom';
import Address from '../App';
import {shallow} from 'enzyme';

describe('Address Tests', function () {

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        const firstName = wrapper.find('p').last().debug();
        console.log(firstName);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button Set Address click message: firstName', () => {
        const wrapper = shallow(<Address />);
        const AddressSign = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button#address').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: lastName', () => {
        const wrapper = shallow(<Address />);
        const AddressSign = <p className="App-intro">lastName: Murray</p>;
        wrapper.find('button#address').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: streetAddress', () => {
        const wrapper = shallow(<Address />);
        const AddressSign = <p className="App-intro">streetAddress: 915 2nd Ave #2988</p>;
        wrapper.find('button#address').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: city', () => {
        const wrapper = shallow(<Address />);
        const AddressSign = <p className="App-intro">city: Seattle</p>;
        wrapper.find('button#address').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: state', () => {
        const wrapper = shallow(<Address />);
        const AddressSign = <p className="App-intro">state: Washington</p>;
        wrapper.find('button#address').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: zipCode', () => {
        const wrapper = shallow(<Address />);
        const AddressSign = <p className="App-intro">zipCode: 98174</p>;
        wrapper.find('button#address').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

});