(function() {

// Create an array of words. These are our words for the game. 
// the name of this array is 'wordBank'
//Global Variables
//==========================================================================
var wordBank = ['hedonismbot', 'wernstrom', 'destructor', 'morbo', 'bender', 'nixon', 'hyperchicken', 'hypnotoad', 'brannigan'];
var randNum = Math.floor(Math.random() * wordBank.length);
var currentWord = wordBank[randNum];
var underScore = [];
var correct = [];
var incorrect = [];
var remaining = 12;

console.log(currentWord);


for (var i = 0; i < currentWord.length; i++) {
        underScore.push("_ ");  
    
    }
console.log(underScore);
   
document.getElementById("unders").innerHTML = underScore.join(" ");
document.getElementById("wrongs").innerHTML = incorrect.join(" ");
// Get the user's guess
document.addEventListener('keypress', function(event) {
     var letter = String.fromCharCode(event.keyCode);
// if user guesses correctly
    if (currentWord.indexOf(letter) > -1 ) {
// push letter to correct array
        correct.push(letter);

    
        
        
// replaces underscore with right letter
        underScore[currentWord.indexOf(letter)] = letter;
 // checks to see if users word matches the currentWord       
        if (underScore.join(" ") === currentWord){
            alert('You Win');
        }
        console.log(correct);
     }
     else {
        incorrect.push(letter);
        console.log(incorrect); 
        remaining--;
       
        if (remaining === 0) {
             var loser_audio = new Audio("assests/audio/YouLose.mp3");
                loser_audio.play();
                var loser_img = document.getElementById("pic");
                loser_img.src = "assests/images/loser.jpg";
                document.img.appendChild(loser_img); 
            }
            //end game img audio
        
     }
     var string = "";
     for ( var i = 0; i < currentWord.length; i++) {
        var char = currentWord[i];
        
        if (correct.indexOf(char) > -1) {
            string = string + char;
        }
        else (string = string + "_ ");
     }

     document.getElementById("unders").innerHTML = string
     console.log(string);

    
    
    
    //console.log(wrong);
});

}());



// subtract 1 from remaining guesses
// Check if guess is right
//if wrong push to wrong array
//if right push to right array. is right array just my answer array?
// when user winsi need an audio to play that is binded to each word in my word array
// game resets
//if user loses, i need my audio to play and game resets */