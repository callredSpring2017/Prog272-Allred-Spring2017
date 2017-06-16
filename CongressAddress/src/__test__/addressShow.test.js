/**
 * Created by bcuser on 4/24/17.
 */
import React from 'react';
import {mount} from 'enzyme';
import Address from "../components/Address";
import ElfTestDebug from '../elftestdebug';

const ElfTestDebugger = new ElfTestDebug(false);

describe('Address-Show Test Suite', function () {

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
        const wrapper = mount(<Address />);
        const welcome = <p className='App-intro'>firstName: unknown</p>;
        ElfTestDebugger.getLast(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);

    });

    it('renders and displays the default last name', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className='App-intro'>lastName: unknown</p>;
        ElfTestDebugger.getLast(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default address', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className='App-intro'>streetAddress: unknown</p>;
        ElfTestDebugger.getLast(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default city', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className='App-intro'>city: unknown</p>;
        ElfTestDebugger.getLast(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default state', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className='App-intro'>state: unknown</p>;
        ElfTestDebugger.getLast(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default zipCode', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className='App-intro'>zipCode: unknown</p>;
        ElfTestDebugger.getLast(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default zipCode', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className='App-intro'>website: unknown</p>;
        ElfTestDebugger.getLast(wrapper, 'p');
        expect(wrapper.contains(welcome)).toEqual(true);
    });});
