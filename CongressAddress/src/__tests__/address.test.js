import React from 'react';
import {mount} from 'enzyme';
import Address from '../components/Address';
import Addresses from '../components/address-list';
import '../css/index.css';
import ElfTestDebug from '../elftestdebug';
import DataMaven from "../components/DataMaven";
jest.mock('whatwg-fetch');
const ElfTestDebugger = new ElfTestDebug(false);
const address = Addresses[0];

describe('Address Test Suite', function () {

    var quiet = true;

    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});
    });

    it('renders button Set Address click message: firstName', () => {
        const wrapper = mount(<DataMaven />);
        const AddressSign = <p className="App-intro">firstName: Lamar</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: lastName', () => {
        const wrapper = mount(<DataMaven />);
        const AddressSign = <p className="App-intro">lastName: Alexander</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });
    it('renders button Set Address click message: streetAddress', () => {
        const wrapper = mount(<DataMaven/>);
        const AddressSign = <p className="App-intro">455 Dirksen Senate Office Building</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: city', () => {
        const wrapper = mount(<DataMaven />);
        const AddressSign = <p className="App-intro">city: Washington DC</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: state', () => {
        const wrapper = mount(<DataMaven />);
        const AddressSign = <p className="App-intro">state: TN</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

    it('renders button Set Address click message: zipCode', () => {
        const wrapper = mount(<DataMaven />);
        const AddressSign = <p className="App-intro">zipCode: 20510</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(AddressSign)).toEqual(true);
    });

});