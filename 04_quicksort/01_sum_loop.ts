function sum(arrNumbers: number[]): number {
  let total: number = 0;

  arrNumbers.forEach((element) => {
    total = total + element;
  });

  return total;
}

console.log(sum([1, 3, 4, 7]));
