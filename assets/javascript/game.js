// "Things I ran out of time to do:
// 1. I think I needed to incorporate a for loop for when guessesLeft gets to 0 instead of 
//     the way i did it with nested if and else ifs. as it stands now, you can win the game with negative
//     lives, for example.

// 2. i couldnt figure out how to get the game to "restart" after a win or guessesLeft hits 0, i'm guessing the for
//     loop might be involved there as well.

// 3. i needed to have my "guessedList" grow rather than replace, i can do this in jQuery...

// 4. stying    
// " 


//make array for alphabet
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//make vars for keeping score
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedList;


//make vars for displaying in the HTML
// var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessedListText = document.getElementById("guessed-list");


//make a way to select the secret letter
var hiddenLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(hiddenLetter)

//make something that lowers guessesLeft by 1 each time an incorrect letter is selected, if 0, ++1 to Losses, etc.

//on key press function that everything lives under...

document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log(userGuess)
    
    
        if (userGuess === hiddenLetter) {
             alert("you win!");
             wins++;
         } else if (userGuess !== hiddenLetter) {
            guessesLeft--;
                if (guessesLeft <= 0) {
                     losses++;
                 }
    
        }


 
 
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "guesses left: " + guessesLeft;
    guessedListText.textContent = "You have already tried: " + userGuess;
}

