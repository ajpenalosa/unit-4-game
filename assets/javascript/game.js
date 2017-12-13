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

        // Generates a random number between 19 - 120
        randomNumber = Math.floor(Math.random() * 102) + 19;

        // Displays the random in the h2 with class of .number-to-guess
        $(".number-to-guess").text(randomNumber);

        // Loops through image crystal image
        crystalImage.each(function(i, obj) {
            
            // Generates a random number between 1 - 12
            crystalNumber = Math.floor(Math.random() * 12) + 1;

            // Adds the random number as a value attribute to the image
            $(this).attr("value", crystalNumber);

        });

        totalScoreWrite.text("0");
        
    }

    gameStart();

    crystalImage.on("click", function() {

        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        
        totalScore += crystalValue;
        totalScoreWrite.text(totalScore);

        if (totalScore === randomNumber) {
            message.text("You Win!");
            wins++;
            scoreWins.text(wins);
            gameStart();
        }

        else if (totalScore >= randomNumber) {
            message.text("You Lose!");
            losses++;
            scoreLosses.text(losses);
            gameStart();
        }

    });

});