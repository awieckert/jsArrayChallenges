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
    var heighestScore = 0;
    var heighestScoringWord = [];

    for(var i = 0; i < array.length; i++){
        var currentWord = array[i];
        var currentWordScore = 0;

        for(var j = 0; j < currentWord.length; j++){
            var letterScore = (currentWord.charCodeAt(j)) - 96;
            currentWordScore += letterScore;
        }
        
        if (currentWordScore > heighestScore){
            heighestScore = currentWordScore;
            heighestScoringWord = array[i];
        }
    }

        var winner = document.getElementById('challenge-1');
        winner.innerHTML = "<h1>The Heighest Scoring Word is: " + heighestScoringWord + "</h1>" + "<h1>With a Score of: " + heighestScore + "!</h1>";
}

letterNumbers("adam shrimpzzz zztopzzzzzzzzzzzz");


// Challenge 1 END!


// Challenge 2 Start!
// Change any 3's to 7's and 7's to 3's

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var lastIndexOf3 = -1;
var indicesOf3 = [];
for(var i = 0; i < challengeTwoInputA.length; i++){
    var grabIndice = challengeTwoInputA.indexOf(3, (lastIndexOf3) + 1);
    console.log("grabIndice before if: ",grabIndice);
    if(grabIndice != -1){
        indicesOf3.push(grabIndice);
        lastIndexOf3 = grabIndice; 
    }
}
console.log(indicesOf3);
console.log(lastIndexOf3);


// var test = challengeTwoInputA.indexOf(3, 3);
// console.log("Test: ", test);



