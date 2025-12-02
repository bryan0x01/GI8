function sharePizza(totalSlices, people) {
  let perPerson = (totalSlices / people).toFixed(2);

  return `Each person gets ${perPerson} slices of pizza; from our ${totalSlices} slice pizza`;
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));