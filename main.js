'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    let sum = arr.reduce(function(a, b) {
      return a + b;
    });
    return sum + base;
  },

  someObjsContainProp: (arr, prop) => {
    let result = false;
    arr.some(function(element) {
      if (element[prop]) {
        result = true;
      }
    });
    return result;
  },

  convertNameArrayToObject: (arr) => {
    let nameObj = arr.map(function(element) {
      let names = {
        first: element[0],
        last: element[1]
      };
      return names;
    });
    return nameObj;
  },

  objContainsProp: (arr, prop) => {
    let result = false;
    result = arr.every(function(element) {
      return element.hasOwnProperty(prop);
    });
    return result;
  },

  stringMatch: (arr, str) => {
    let matches = arr.filter(function(element) {
      return element.includes(str)
    });
    return matches;
  },
};
