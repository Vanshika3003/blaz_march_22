import React from "react";
import  {render, unmountComponentAtNode} from 'react-dom';
import ReactDOM  from "react-dom/client";
import {act} from 'react-dom/test-utils'
// import the component being tested
import HelloTestComponent from "../componentfortest/hellotestcomponent";

// test suit and test case
 
describe('The test Suit for the HelloTestComponent',()=>{
    // define a DOM Container, this will be created in Memory with DOM
    let DOMContainer = null;
    let root = null;
    beforeEach(() => {
        // create a div element in memory so that the component will be
        // rendered
        DOMContainer = document.createElement("div");
        // append the DOMContainer in HTML Document created in Memory
     //   document.body.appendChild(DOMContainer); 
     root =  ReactDOM.createRoot(DOMContainer)
    });
    // Write the test case
    it('the component must render without props',()=>{
        // act
        act(()=>{
            // call component w/o passing any props
            //the component will be rendered into the omContainer 
           root.render(<HelloTestComponent/>);
        });
        // assertion
        expect(DOMContainer.textContent).toBe('Hello, Mr. Unknown');
    });

    it('the component must render with props',()=>{
        // act
        act(()=>{
            // call component w/o passing any props
            //the component will be rendered into the omContainer 
           root.render(<HelloTestComponent name={'Mahesh'}/>);
        });
        // assertion
        expect(DOMContainer.textContent).toBe('Hello, Mr. Mahesh');
    });
    // afterEach(()=>{
    //     // unmount the DOMContainer
    //     unmountComponentAtNode(root);
    //     // free the memory
    //     DOMContainer.remove();
    //     // reset the container
    //     DOMContainer = null;
    // });

});