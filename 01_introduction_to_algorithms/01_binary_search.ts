function binary_search<T>(list: T[], item: T): T | null {
  var low: number = 0;
  var high: number = list.length - 1;

  while (low <= high) {
    const mid: number = Math.floor((low + high) / 2);
    const guess: T = list[mid];
    if (guess === item) {
      return guess; // Retorna o item encontrado
      // return mid; // retornar o índice do item
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myStringList = ['Ademir', 'Bob', 'Carla', 'Daniel', 'Eduarda', 'Fábio', 'Gabriel', 'Henrique', 'Igor'];

console.log("Procurando o elemento 4:", binary_search<number>(myList, 4));
console.log("Procurando o elemento 3:", binary_search<number>(myList, 3));
console.log("Procurando o elemento 20:", binary_search<number>(myList, 20));

console.log('-------------------------------------------------');
console.log('Procurando a posição do nome Igor:', binary_search<string>(myStringList, 'Igor'));
console.log('Procurando a posição do nome Bob:', binary_search<string>(myStringList, 'Bob'));
