console.log("Index is Linked");

// Need to create an Array out of the string
// Splice the string at the "space" character

// assign numerical values to each letter by having each word in it's own array
// sum the numerical values
// compare each array.
// output the values to the DOM
// .split(" ") may split each word into a seperate index of an array. can then put those indexes into seperate arrays

var letterNumbers = function (value) {

}

var string = "jump high";
var word1
var word2
var word1Score = 0;
var word2Score = 0;

var newWord = "ab"
console.log("newWord:", newWord.charCodeAt(1))

var array = string.split(' ');
console.log(array);
word1 = array[0];
word2 = array[1];
console.log("word vlaues: ", word1, word2)
console.log(word1[0]);


for(var i = 0; i < word1.length; i++){
    var wordCode = (word1.charCodeAt(i)) - 96;
    word1Score += wordCode;
}

console.log("word1Score: ", word1Score);

for(var i = 0; i < word2.length; i++){
    var wordCode = (word2.charCodeAt(i)) - 96;
    word2Score += wordCode;
}









console.log("word2Score: ", word2Score);
if (word1Score > word2Score) {
    var winner = document.getElementById('challenge-1');
    winner.innerHTML = "<h1>" + word1 + "</h1>";
} else if (word1Score === word2Score){
    var winner = document.getElementById('challenge-1');
    winner.innerHTML = "<h1>" + word1 + "</h1>";
} else {
    var winner = document.getElementById('challenge-1');
    winner.innerHTML = "<h1>" + word2 + "</h1>";
}


