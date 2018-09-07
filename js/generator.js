/**
 * Generate numbers in the Fibonacci sequence.
 *
 * @generator
 * @function fibonacci
 * @yields {number} The next number in the Fibonacci sequence.
 */

function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  for (let n of fibonacci()) {
    console.log(n);
    if (n >= 1000) {
      break;
    }
  }