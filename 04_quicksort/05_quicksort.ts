function quicksort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  // Pega o primeiro elemento da lista para ser o pivô
  const pivot = arr[0];
  // Agora retiramos o primeiro elemento da lista que é nosso pivô
  // E fazemos um filtro para retornar todos os elementos menor ou igual ao pivô
  const less = arr.slice(1).filter((el) => el <= pivot);
  // Aqui fazemos um filtro para pegar todos os elementos maiores que nosso pivô
  const greater = arr.slice(1).filter((el) => el > pivot);

  // Por fim chamamos novamente nossa função passando a parte esquerda do pivô
  // Ou seja, os elementos menores que nosso pivô
  // E mesclamos com o nosso pivô mais a chamada a função passando os elementos maiores que nosso pivô
  return quicksort(less).concat(pivot, quicksort(greater));
}

console.log(quicksort([2, 10, 3, 11, 7, 4, 20]));
