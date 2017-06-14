/**
 * Created by bcuser on 4/19/17.
 */
import React from 'react';
import {mount} from 'enzyme';
import Address from '../components/address';
import Addresses from '../components/address-list';
import '../css/index.css';

const address = Addresses[0];

describe('Address Test Suite', function () {

    var quiet = true;

    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    it('renders button Set Address click message: firstName', () => {
        const wrapper = mount(<Address />);
        const AddressSign = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: lastName', () => {
        const wrapper = mount(<Address />);
        const AddressSign = <p className="App-intro">lastName: Murray</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });
    it('renders button Set Address click message: streetAddress', () => {
        const wrapper = mount(<Address />);
        const AddressSign = <p className="App-intro">streetAddress: 915 2nd Ave #2988</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: city', () => {
        const wrapper = mount(<Address />);
        const AddressSign = <p className="App-intro">city: Seattle</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: state', () => {
        const wrapper = mount(<Address />);
        const AddressSign = <p className="App-intro">state: Washington</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: zipCode', () => {
        const wrapper = mount(<Address />);
        const AddressSign = <p className="App-intro">zipCode: 98174</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

});