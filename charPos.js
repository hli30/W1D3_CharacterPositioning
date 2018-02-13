function countLetters (string) {
  let word = string.split(" ").join("");

  let letterPos = new Object();

  for (let i = 0; i < word.length; i++) {
    if(!letterPos[word[i]]) {
      letterPos[word[i]] = [i];
    } else {
      letterPos[word[i]].push(i);
    }
  }
  return letterPos;
}

console.log(countLetters("lighthouse in the house"))