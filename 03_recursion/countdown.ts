function countdown(value: number) {
  console.log(`${value}...`);

  if (value === 0) {
    return console.log('End...');
  }

  countdown(value - 1);
}

countdown(10);
