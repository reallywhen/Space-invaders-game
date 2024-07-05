for (x = 0; x < 100; x++) {
  console.log(x);
}
if ((x % 3) === 0) {
  console.log(x 'fizz');
}



for (x = 0; x < 100; x++) {
  var text = x ;
if (x % 3 === 0) {
text = text + "fizz"
}
 
if (x%5=== 0) {
  text = text + "buzz"
}

console.log(text);
 
}



for (x = 0; x < 101; x++) {
  if ((x % 3) != 0 && (x % 5) != 0 ) {
    console.log(x);
  }
  if ((x % 3) === 0 && (x % 5) != 0) {
    console.log(x + "fizz");
  }
  if ((x % 5) === 0 && (x % 3) != 0 ) {
    console.log(x + "buzz");
  }
  if ((x % 5) === 0 && (x % 3) === 0) {
    console.log(x + "buzzfizz");
  }

}
