/**
 * Created by bcuser on 4/19/17.
 */
import React from 'react';
//import ReactDOM from 'react-dom';
import Address from '../components/address';
import {shallow} from 'enzyme';


describe('Address Tests: Default Address', function () {
    var quiet = false;

    function getFirst(wrapper) {
        const ninep = wrapper.find('p').first().debug();
        if (!quiet) {
            console.log("APP TEST:", ninep);
        }
    }

    function getLast(wrapper) {
        const ninep = wrapper.find('p').debug();
        if (!quiet) {
            console.log("APP TEST:", ninep);
        }
    }

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address />);
        const unknown = <p className="App-intro">firstName: unknown</p>;
        //const firstName = wrapper.find('p').last().debug();
        //getLast(wrapper);
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address />);
        const unknown = <p className="App-intro">firstName: unknown</p>;
        //const firstName = wrapper.find('p').last().debug();
       //getLast(wrapper);
        expect(wrapper.contains(unknown)).toEqual(true);

    });
    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address />);
        const unknown = <p className="App-intro">lastName: unknown</p>;
        const firstName = wrapper.find('p').last().debug();
        //getLast(wrapper);
        //expect(wrapper.contains(unknown)).toEqual(true);

    });
    it('renders and displays the default address', () => {
        const wrapper = shallow(<Address />);
        const unknown = <p className="App-intro">streetAddress: unknown</p>;
        //const firstName = wrapper.find('p').last().debug();
        //getLast(wrapper);
        expect(wrapper.contains(unknown)).toEqual(true);

    });
    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address />);
        const unknown = <p className="App-intro">city: unknown</p>;
        //const firstName = wrapper.find('p').last().debug();
        //getLast(wrapper);
        expect(wrapper.contains(unknown)).toEqual(true);

    });
    it('renders and displays the default state', () => {
        const wrapper = shallow(<Address />);
        const unknown = <p className="App-intro">state: unknown</p>;
        //const firstName = wrapper.find('p').last().debug();
       //getLast(wrapper);
        expect(wrapper.contains(unknown)).toEqual(true);

    });
    it('renders and displays the default zipCode', () => {
        const wrapper = shallow(<Address />);
        const unknown = <p className="App-intro">zipCode: unknown</p>;
        //const firstName = wrapper.find('p').last().debug();
        //getLast(wrapper);
        expect(wrapper.contains(unknown)).toEqual(true);
    });
// });
//
// describe('Address Tests: Set Address', function () {
    it('renders button Set Address click message: firstName', () => {
        const wrapper = shallow(<Address />);
        const AddressSign = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button#address').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
        console.log('HHHHHEEEEEEEEEEYYYY!');
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