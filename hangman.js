var prompt = require('prompt');

var hang0 = "    _________ \n    |         |\n    |\n    |\n    |\n    |";
var hang1 = "    _________ \n    |         |\n    |         0\n    |\n    |\n    |";
var hang2 = "    _________ \n    |         |\n    |         0\n    |        /\n    |\n    |";
var hang3 = "    _________ \n    |         |\n    |         0\n    |        /|\n    |\n    |";
var hang4 = "    _________ \n    |         |\n    |         0\n    |        /|\\\ \n    |\n    |";
var hang5 = "    _________ \n    |         |\n    |         0\n    |        /|\\\ \n    |        / \n    |";
var hang6 = "    _________ \n    |         |\n    |         0\n    |        /|\\\ \n    |        / \\\ \n    |";
var hanging = [hang0, hang1, hang2, hang3, hang4, hang5, hang6];
var hangCounter = 0;
var list = ["hello", "whatsup", "yourself", "randomword"];
var randomWord = list[Math.floor(Math.random() * list.length)].split("");
var guesses = [];
for (var i = 0; i < randomWord.length; i++){
    guesses.push("_");
}


function game (){ 
    prompt.get(['char'], function(err, result){
    var counter = 0;
    if(err){return console.log("ERROR!");}
    for(var j = 0; j < randomWord.length; j++){
        if(result.char === randomWord[j]){
            guesses.splice(j, 1, result.char);
            counter++;
            var winCount = 0;
            for (var k = 0; k < guesses.length; k++){
                if(guesses[k]==="_"){
                    winCount++;
                }
            }
            if(winCount === 0){
                console.log("you win!! " + guesses);
                return;
            }
        }
    }
    if (counter === 0){
        console.log("There are no " + result.char + "\'s in the word...");
        hangCounter++;
        if(hangCounter === 6){
            console.log("You are dead!");
            console.log(hanging[hangCounter]);
            return;
        }
        console.log(hanging[hangCounter]);
    } else {
        console.log(guesses);
    }
    return game();
});

}



game();





/*





    _________
    |         |
    |         0
    |        /|\\\
    |        / \\\
    |
    */
