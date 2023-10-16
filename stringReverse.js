function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    let reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

let inputSentence = prompt("Enter a sentence: ");
let reversedSentence = reverseWords(inputSentence);
console.log("Reversed sentence: " + reversedSentence);
