// Challenge 1 Start

console.log("Index is Linked");

// Need to create an Array out of the string
// Splice the string at the "space" character

// assign numerical values to each letter by having each word in it's own array
// sum the numerical values
// compare each array.
// output the values to the DOM
// .split(" ") may split each word into a seperate index of an array. can then put those indexes into seperate arrays


// Challenge-1 Advance instruction from Lauren

// Challenge-1 Advance instruction END-----!!!


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

// var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];



// Challenge-3 Start-----!

// var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];

function uniqueNum (arrayToSum){
    var arrayToUse = arrayToSum;

    for(var i = 0; i < arrayToUse.length; i++){
        var currentIndex = arrayToUse[i];
            for(var j = i + 1; j < arrayToUse.length; j++) {
                if(currentIndex === arrayToUse[j]){
                arrayToUse.splice(j, 1);
                j--;
            } 
        }
    }
    if(arrayToUse[0] !== arrayToUse[1]){
        arrayToUse.splice(0,1);
    }

    var stringToPrint = "<h1>The Unique Value is: " + arrayToUse + "</h1>"
    console.log("Nums: ", arrayToUse);
    document.getElementById("challenge-3").innerHTML = stringToPrint;
}

uniqueNum(challengeThreeInputB);

// Challenge-3 END ------!



// Challenge-6 START------!

var test1 = [1,3]; // 2
var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
var test4 = [1,2,3,4]; // 5

function mathStuffs(testArray){
    var correctArrayLength = (testArray.length) + 1;
    var correctSum = (correctArrayLength * (correctArrayLength + 1)) / 2;
   
    var testArraySum = 0;
    for(var i = 0; i < testArray.length; i++){
        testArraySum += testArray[i];
    }

    var missingNumber = correctSum - testArraySum;
    var printDiv = document.getElementById('challenge-6');
    printDiv.innerHTML += "<h1>The missing number is: " + missingNumber + "</h1>"
}

mathStuffs(test1);
mathStuffs(test2);
mathStuffs(test3);
mathStuffs(test4);
