import React from "react";
import  {render, unmountComponentAtNode} from 'react-dom';
import ReactDOM  from "react-dom/client";
import {act} from 'react-dom/test-utils'
// import the component being tested
import EventTestComponent from './../componentfortest/eventtestcomponent';

// test suit and test case
 
describe('The test Suit for the HelloTestComponent',()=>{
    // define a DOM Container, this will be created in Memory with DOM
    let DOMContainer = null;
    let root = null;
    beforeEach(() => {
        DOMContainer = document.createElement("div");
        document.body.appendChild(DOMContainer);
    });
    // Write the test case
    it('the component must render without props',()=>{
        // act
        act(()=>{
            // call component w/o passing any props
            //the component will be rendered into the omContainer 
            render(<EventTestComponent/>, document);
        });
        
        // lets look for the button from the DOM
        const button = document.querySelector("button"); 
        // lets look for the element that is having class as '.dv'
        const div = document.querySelector('.dv');
        // check if the text of the button is 'Save'
        expect(button.innerHTML).toBe("Save");  
        // make sure that th value in div is false
        expect(div.innerHTML).toBe("false");  
        // lets dispatch the click event on button
        act(()=>{
            button.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });
         // check if the text of the button is 'Update'
         expect(button.innerHTML).toBe("Update");  
         // make sure that th value in div is true
         expect(div.innerHTML).toBe("true");  
    });

    

});