import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/SmallNumbers';
import ElfHeader from '../components/elfheader';
import {shallow} from 'enzyme';

describe('Header Suite', function() {

    it('renders without our Address component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address />, div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to Prog 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<Address />);
        console.log(wrapper);
        const welcome = <p className='App-intro'>Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button Nine click message', () => {
        const wrapper = shallow(<Address />);
        const nineSign = <p className='App-intro'>Nine: 9</p>;
        wrapper.find('button#nine').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
