// Challenge 1 Start

console.log("Index is Linked");

// Need to create an Array out of the string
// Splice the string at the "space" character

// assign numerical values to each letter by having each word in it's own array
// sum the numerical values
// compare each array.
// output the values to the DOM
// .split(" ") may split each word into a seperate index of an array. can then put those indexes into seperate arrays


var letterNumbers = function (value) {
    var array = value.split(' ');
    var word1 = array[0];
    var word2 = array[1];
    var word1Score = 0;
    var word2Score = 0;

    for(var i = 0; i < word1.length; i++){
        var wordCode = (word1.charCodeAt(i)) - 96;
        word1Score += wordCode;
    }

    for(var i = 0; i < word2.length; i++){
        var wordCode = (word2.charCodeAt(i)) - 96;
        word2Score += wordCode;
    }

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

}

letterNumbers("adam shrimpzzz");


// Challenge 1 END!


// Challenge 2 Start!



