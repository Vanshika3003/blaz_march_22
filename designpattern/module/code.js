// var i = 10;
// function assign() {
//     // j is scoped to the function
//   for (var j = 0; j < 10; j++) {
//     i = j;
//     console.log(`In loop in function i = ${i} and j = ${j}`);
//   }
//   i++;
//   j++;
//   console.log(`Outside loop  in function i = ${i} and j = ${j}`);
// }
// assign();
// console.log(`Outside function i = ${i} and j = ${j}`);

// Create the JS Module using IIFE

var module = (function () {
  var i = 0;
  function assign() {
    // j is scoped to the function
    for (var j = 0; j < 10; j++) {
      i = j;
      console.log(`In loop in function i = ${i} and j = ${j}`);
    }
    i++;
    j++;
    console.log(`Outside loop  in function i = ${i} and j = ${j}`);
  }

  return {
      fnAssign:assign
  }
})();

// module.fnAssign();

