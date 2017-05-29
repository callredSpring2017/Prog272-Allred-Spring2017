import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from '../components/DataMaven';
import ElfMenu from '../components/ElfMenu';
import {shallow} from 'enzyme';
import {mount} from 'enzyme'
import {MemoryRouter} from 'react-router';

describe('ElfMenu Suite', function() {

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

    it('renders the ElfMenu component without crashing', () => {
        const div = document.createElement('div');
        const wrapper = mount(<MemoryRouter><DataMaven /></MemoryRouter>);
        ReactDOM.render(<MemoryRouter><DataMaven /></MemoryRouter>, div);
    });

    it('Shows there is no BrowserRouter in ElfMenu', () => {
        const wrapper = shallow(<ElfMenu />);
        const router = wrapper.find('BrowserRouter');
        expect(router.length).toEqual(0);
    });

});
