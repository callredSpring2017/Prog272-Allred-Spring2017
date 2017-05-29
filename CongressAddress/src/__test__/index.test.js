import React from 'react';
import DataMaven from '../components/DataMaven';
import {mount} from 'enzyme';
import ElfDebugEnzyme from '../elftestdebug';
const elfDebug = new ElfDebugEnzyme(true, 'DataMaven.test.js');
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

describe('DataMaven Suite', function() {

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


    // it('renders Index component without crashing', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<Index />, div);
    // });

    it('renders and displays a Router', () => {
        const wrapper = mount(<DataMaven  />);
        elfDebug.getAll(wrapper);
        var router = wrapper.find('BrowserRouter');
        expect(router.length).toEqual(1);
    });
});