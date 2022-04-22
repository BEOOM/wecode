function findEvenNumber() {
  let answer = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      answer.push(i);
    }
  }
}

findEvenNumber(50);
