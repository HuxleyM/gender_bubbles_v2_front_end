import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme';
import Canvas from '../canvas/main.js'


describe('The canvas', ()=>{

    it('it exists',()=>{
        const wrapper = mount(<Canvas/>);
        expect(wrapper.exists('canvas')).to.equal(true);
    })
})