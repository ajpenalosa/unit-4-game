$(document).ready(function() {

    var randomNumber;
    var crystalNumber;

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    var scoreWins = $(".score-wins");
    var scoreLosses = $(".score-losses");
    var message = $(".message");
    var crystalImage = $(".crystal");
    var totalScoreWrite = $(".total-score");

    function gameStart() {

        // Resets game
        totalScore = 0;

        // Generates a random number between 19 - 120
        randomNumber = Math.floor(Math.random() * 102) + 19;

        // Displays the random number in the h2 with class of .number-to-guess
        $(".number-to-guess").text(randomNumber);

        // Loops through image crystal image
        crystalImage.each(function(i, obj) {
            
            // Generates a random number between 1 - 12
            crystalNumber = Math.floor(Math.random() * 12) + 1;

            // Adds the random number as a value attribute to the image
            $(this).attr("value", crystalNumber);
            console.log("This is crystal #" + i + " " + crystalNumber);

        });

        // Separates the console log for each new game
        console.log("------------------------------")

        // Displays "0" for Your Total Score
        totalScoreWrite.text("0");
        
    }

    gameStart();

    // Event when clicking on a crystal image
    crystalImage.on("click", function() {
        
        // Assigns the value attribute to a variable called crystalValue
        // Converts that value from a string to a number
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);

        // Adds the crystalValue to the totalScore and displays it in the browser
        totalScore += crystalValue;
        totalScoreWrite.text(totalScore);

        // Once the totalScore equals the randomNumber, then win
        if (totalScore === randomNumber) {
            message.text("You Win!");
            wins++;
            scoreWins.text(wins);
            gameStart();
        }

        // If the totalScore goes over the randomNumber, then lose
        else if (totalScore >= randomNumber) {
            message.text("You Lose!");
            losses++;
            scoreLosses.text(losses);
            gameStart();
        }

    });

});