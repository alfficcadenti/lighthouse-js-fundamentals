for (var i = 100; i <= 200; i++) {
  var rem3 = i % 3;
  var rem4 = i % 4;

  if (rem3 == 0 && rem4 == 0) {
    console.log("LoopyLighthouse");
  } else if (rem4 == 0) {
    console.log("Lighthouse");
  } else if (rem3 == 0) {
    console.log("Loopy");
  } else {
    console.log(i);
  }
}