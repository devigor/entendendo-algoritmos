function max(arr: number[]): number | null {
  // Se não tiver elementos, retorna null
  if (arr.length === 0) {
    return null;
  }

  // Se tiver apenas um elemento retorna ele mesmo
  if (arr.length === 1) {
    return arr[0];
  }

  // Chama a função removendo o primeiro item do array
  const subMax = max(arr.slice(1));
  console.log("subMax", subMax);

  // Se o primeiro item for maior que o subMax
  // Então retorna o array na primeira posição
  // Se não retorna o valor de subMax
  return arr[0] > subMax! ? arr[0] : subMax;
}

console.log(max([1, 2, 4, 3]));
