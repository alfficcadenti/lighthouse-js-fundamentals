function loopyLighthouse(range, multiples, words) {

  if(range.length !== 2) {
    return "illegal range";
  }
  if(multiples.length !== 2) {
    return "choose 2 numbers";
  }
  if(words.length !== 2) {
    return "choose 2 words";
  }

  for (var i = range[0]; i <= range[1]; i++) {
    var rem1 = i % multiples[0];
    var rem2 = i % multiples[1];

    if (rem1 == 0 && rem2 == 0) {
      console.log(words.join(''));
    }
    else if (rem1 == 0) {
      console.log(words[0]);
    }
    else if (rem2 == 0) {
      console.log(words[1]);
    }
    else {
      console.log(i);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);