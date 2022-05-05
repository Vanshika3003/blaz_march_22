import { useState, useEffect } from "react";

const CodeSplitComponent = () => {
  const [length, getLength] = useState(0);
  let str = "React.js Code Splitting";

  const loadModule = () => {
    // import the exported module in then() method
    // module parameter represents all the exported module from
    // imported file
    import("./stringoperations")
      .then((module) => {
        // get an instance of the module
        let obj = new module.StringOperations();
        getLength(obj.getLength(str));
      })
      .catch((error) => {
        console.log("====================================");
        console.log(`Error Occurred while loading the module ${error}`);
        console.log("====================================");
      });
  };

  return (
    <div className="container">
      <h5>
        The React.js Code Splitting for the Asynchronous Loading of Module
      </h5>
      <strong>
        Length of {str} is = {length}
      </strong>
      <hr />
      <button className="btn btn-warning" onClick={loadModule}>Load Module</button>
    </div>
  );
};
export default CodeSplitComponent;
