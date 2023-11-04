function sum(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }
  // Pega o primeiro item do array
  // Chama novamente a função mas dessa vez retirando o primeiro item do array
  return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4]));
