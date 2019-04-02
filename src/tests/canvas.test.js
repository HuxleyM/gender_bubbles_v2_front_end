import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {mount} from 'enzyme';
import Canvas from '../canvas/main'


describe('The canvas', ()=>{

    it('it exists',()=>{
        const wrap = mount(<Canvas/>)
        expect(
            wrap.containsMatchingElement(
                <canvas> Your browser doesnt support canvas :0 </canvas>
            )
      ).toBeTruthy()
    })


    
})