/** Reducer is a method which excute in each param of memeber of a Array.
* @reducer
* @function reducerSum
*/

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6