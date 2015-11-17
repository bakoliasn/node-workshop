var prompt = require('prompt');
var number = Math.round(100 * Math.random());
var array = [];

function random() {
    prompt.get(['guess'], function(err, result) {
        if (err) {
            return console.log("THERE WAS AN ERROR... RUNNNNN");
        }
        array.push(Number(result.guess));
        if (Number(result.guess) === number) {
            return console.log(number + " is the right guess!");
        }
        else if (array.length === 4) {
            return console.log("WRONG... that was your last try, you guessed " + array + " but the answer was " + number);
        }
        else {
            console.log("Wrong answer guess again! you have " + (4 - array.length) + " tries left!");
            return random();
        }
    });
}
random();