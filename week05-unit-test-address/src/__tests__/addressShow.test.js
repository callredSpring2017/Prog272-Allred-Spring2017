/**
 * Created by bcuser on 4/24/17.
 */
import React from 'react';
import {mount} from 'enzyme';
import Address from "../components/address";
import ElfTestDebug from '../elftestdebug';

const ElfTestDebugger = new ElfTestDebug(false);

describe('Address-Show Test Suite', function () {
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
/*
 const getIndex = function(wrapper, index, talkToMe) {
 if (!quiet || talkToMe) {
 const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
 console.log('NINEP:', ninep);
 }

 };*/

    it('renders and displays the default first name', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        //const lastfirstName = wrapper.find('p').last().debug();
        getLast(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);

    });

    it('renders and displays the default last name', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        //const lastfirstName = wrapper.find('p').last().debug();
        getLast(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default address', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className="App-intro">streetAddress: unknown</p>;
        //const streetAddress = wrapper.find('p').last().debug();
        getLast(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default city', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className="App-intro">city: unknown</p>;
       // const city = wrapper.find('p').last().debug();
        getLast(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default state', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className="App-intro">state: unknown</p>;
       //const state = wrapper.find('p').last().debug();
        getLast(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);

    });
    it('renders and displays the default zipCode', () => {
        const wrapper = mount(<Address />);
        const welcome = <p className="App-intro">zipCode: unknown</p>;
        //const zip = wrapper.find('p').last().debug();
        getLast(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});