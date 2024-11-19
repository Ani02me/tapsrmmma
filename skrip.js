function compareWords(word1, word2) {
  if (word1.toLowerCase() === word2.toLowerCase()) {
      return "Сөздер бірдей";
  } else {
      return "Сөздер әртүрлі";
  }
}


console.log(compareWords("Javascript", "javascript"));
console.log(compareWords("Hello", "world"));