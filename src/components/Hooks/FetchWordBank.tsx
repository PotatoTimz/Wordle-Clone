import wordBank from "../../assets/valid-wordle-words.txt";

const fetchValidWords = async () => {
  let wordSet;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((wordBank) => {
      wordSet = new Set(wordBank.split("\r\n"));
    });

  return wordSet;
};

export default fetchValidWords;
