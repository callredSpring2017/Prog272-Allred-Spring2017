import React from 'react';
import {mount} from 'enzyme';
import '../css/index.css';
import Addresses from '../components/address-list'
import AddressChanger from '../components/AddressChanger';
import ElfTestDebug from '../elftestdebug';

const ElfTestDebugger = new ElfTestDebug(true);

describe('Address Test Changer Suite', function () {

    var quiet = true;
    let address = Addresses[0];

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

    it('renders and displays the default first name', () => {
        const wrapper = mount(<AddressChanger />);
        const welcome = <input id='elfFirstName' className='App-intro' value='unknown'/>;
        ElfTestDebugger.getLast(wrapper, 'input');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = mount(<AddressChanger />);
        const welcome = <input id='elfLastName' className='App-intro' value='unknown'/>;
        ElfTestDebugger.getLast(wrapper, 'input');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });
    it('renders and displays the default address', () => {
        const wrapper = mount(<AddressChanger />);
        const welcome = <input id='elfStreetName' className='App-intro' value='unknown' />;
        ElfTestDebugger.getLast(wrapper, 'input');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });
    it('renders and displays the default city', () => {
        const wrapper = mount(<AddressChanger />);
        const welcome = <input id='elfCity' className='App-intro' value='unknown' />;
        ElfTestDebugger.getLast(wrapper, 'input');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);

    });
    it('renders and displays the default state', () => {
        const wrapper = mount(<AddressChanger />);
        const welcome = <input id='elfState' className='App-intro' value='unknown' />;
        ElfTestDebugger.getLast(wrapper, 'input');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });
    it('renders and displays the default zipCode', () => {
        const wrapper = mount(<AddressChanger />);
        const welcome = <input id='elfZipCode' className='App-intro' value='unknown' />;
        ElfTestDebugger.getLast(wrapper, 'input');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });
    it('renders and displays the default website', () => {
        const wrapper = mount(<AddressChanger />);
        const welcome = <input id='elfWebsite' className='App-intro' value='unknown' />;
        ElfTestDebugger.getLast(wrapper, 'input');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });});
