function range(start, end, step) {
  var arrayOutput = [];

if (start === undefined || end === undefined || step === undefined || start > end || step < 0 ) {
    return arrayOutput;
  }
  for (var i = start; i <= end; i+step) {
    arrayOutput.push(i);
    i=i+step;
  }
  return arrayOutput;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
