function stringAnagram(dictionary, query) {
  // Write your code here
  // for every word in the dic check if the leters of query exist on each
  let array = [];
  let queryLength = query.length;
  
  for (let j = 0; j < query.length; j++) {
    let count = 0;    
    let queryWord = query[j];
    console.log(queryWord);
    // use filter to check if the word is anagram
    dictionary.filter(word => {
      let wordLength = word.length;
      let innerCount = 0;
      for (let i = 0; i < wordLength; i++) {
        if (queryWord.includes(word[i])) {
          innerCount++
        }
      }
      console.log(innerCount);
      if (innerCount === queryWord.length) {
        count++;
      }
    });
    array.push(count);

  }
  console.log(array);
  return array;
}
stringAnagram(
  ["heater", "cold", "clod", "reheat", "docl"],
  ["codl", "heater", "abcd"]
);
