function greeting(name: string) {
  console.log(`Olá ${name}!`);
  greeting2(name);
  console.log('Preparando para dizer tchau...');
  bye();
}

function greeting2(name: string) {
  console.log(`Como vai ${name}?`);
}

function bye() {
  console.log('Bye...');
}

greeting('Igor');

