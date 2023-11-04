### Pesquisa Binária

Pesquisa Binária é um algoritmo que recebe uma lista ordenada de elementos e caso o elemento que deseja esteja na lista ele é retornado, se não o valor `None` é retornado. A Pesquisa Binário pode diminuir e muito o número de etapas para se encontrar um determinado valor, isso pois com ela é procurado um valor intermediário e com isso já se consegue eliminar metade das possibilidades. Exemplo, caso eu quero adivinhar um número de 0-100 (número escolhido é 99), eu começaria chutando 50 e assim saberia através de dicas que 50 está muito baixo ainda, então saberia que abaixo de 50 são números baixos, depois poderia chutar 75 e assim por diante.
De maneira geral, para uma lista de `n` números, a Pesquisa Binária precisa de $log_2n$ onde `n` é o número de elementos da lista. ([Relembrando Logaritimos]([Logaritmos | Álgebra intermediária (parte 2) | Matemática | Khan Academy](https://pt.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs)))

### Notação em Big O

è uma notação especial que diz quão rápido é um algoritmo. Supondo que tenho uma lista com `n` elementos, o tempo de execução da anotação segue a fórmula $O(n)$. **_A notação em Big O não fornece o tempo em segundos, mas sim permite que você compare o número de operações. Ela informa o quão rápido um algoritmo cresce_**. Em junção com a Pesquisa Binária, para eu saber o tempo de execução de uma pesquisa tendo em vista que a Pesquisa Binária leva em conta $log_2n$, então a Notação em Big O é $O(log_2n)$

### Ordenação por Seleção

Antes de entrar a fundo na parte de ordenação, é preciso entender a diferença entre Arrays e Listas Encadeadas:

- Array: armazena os dados na memória um ao lado do outro, caso queira adicionar mais itens a um array é necessário mover todos os itens anteriores para que eles continuem juntos e isso é custoso. Pode-se também já deixar reservado na memória um tamanho determinado de 10 itens por exemplo, assim caso seja adicionado mais itens não será necessário mover todo o array, porém caso não use todo espaço que reservou a memória será desperdiçada, pois nenhum outro programa vai poder usá-la também.
- Listas Encadeadas: Com as listas os itens podem ficar em qualquer lugar da memória e cada item vai armazenar além do seu valor o endereço onde se encontra o próximo item da lista na memória. O problema das listas é quando por exemplo queremos saber o último item dela, não conseguimos ir direto a ela pois não sabemos o endereço dela na memória, precisaríamos começar a partir do item 1 e ir de item em item na memória até chegar o item desejado.
  Vale a pena falar também que existem dois tipos de acesso:
- Sequencial: ler os elementos, um por um, começando pelo primeiro. Listas encadeadas só podem lidar com o acesso sequencial, já que não se sabe em que parte da memória o elemento vai estar.
- Aleatório: permite que você pule direto para um elemento.

### Recursão

A definição básica de Recursão e quando uma função chama a si mesma durante sua execução.
Uma função recursiva é composta por dois casos:

- Caso recursivo -> que é quando a função chama a si mesma.
- Caso base -> quando a função não chama a si mesma novamente, de forma que não se torna um loop infinito.
  Precisamos parar um pouco o assunto recursão para entender um conceito que muitas das vezes usamos sem perceber. O conceito de [[Entendendo Algoritmos#Call Stack (Pilhas de chamada)]].

### Call Stack (Pilhas de chamada)

O conceito de Call Stack é simples, você tem um amontoado de itens em forma de pilha (um em cima do outro) e temos apenas duas ações, de inserir (push) um item no topo da pilha e de remover (pop) e ver o conteúdo da lista.
Vejamos o seguinte trecho de código:

```ts
function greeting(name: string) {
  console.log(`Olá ${name}!`);
  greeting2(name);
  console.log("Preparando para dizer tchau...");
  bye();
}

function greeting2(name: string) {
  console.log(`Como vai ${name}?`);
}

function bye() {
  console.log("Bye...");
}

greeting("Igor");
```

Na primeira chamada a função `greeting` que fazemos, o computador vai alocar uma caixa de memória para essa chamada. A memória vai ser usada para setar a variável `name`. Cada vez que nossa função for chamada o computador salva os valores na memória os valores de todas as variáveis. Assim que imprimimos o texto na tela e chamamos a função `greeting2`, nosso computador novamente aloca uma caixa na memória para essa função. Aqui estamos falando que o computador cria caixas de memórias, colocando uma em cima da outra, nesse caso nós temos `greeting` embaixo de `greeting2`. Logo assim que `greeting2` é executado, ele é retirado da pilha e voltamos para a função `greeting`. Um detalhe importante é que quando chamamos a função `greeting2` a função `greeting` ficou num estado de `parcialmente completa`, quando chamamos uma função através de outra, a chamada da função fica nesse estado pausado de parcialmente incompleta. Isto é, todas as variáveis que alocamos em `greeting` ficam armazenadas na memória enquanto a função `greeting2` estão em execução. Quando terminamos a chamada da função `greeting2`, voltamos para a função `greeting`, imprimimos mais um texto e chamamos a função `bye` e todo processo acontece novamente, só que agora quando voltamos a função `greeting` e não temos mais nada para fazer, saímos da função greeting também. Esse processo todod é chamado de Pilha de Chamada (Call Stack).

### Quicksort

Esse é um algoritimo de ordenação por seleção e utiliza a técnica de Dividir para Conquistar (DC). Os passos para a utilização dessa estratégia de Dividir para Conquistar é:

- Descobrir o caso-base, que deve ser o caso mais simples possível.
- Descobrir como reduzir o problema para que ele se torne o caso-base.

Exemplo de algoritimo de quicksort

```ts
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
```
