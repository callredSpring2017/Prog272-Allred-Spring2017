import React from 'react';
import Address from '../components/SmallNumbers';
import {shallow} from 'enzyme';

describe('Small Numbers Suite', function() {

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
