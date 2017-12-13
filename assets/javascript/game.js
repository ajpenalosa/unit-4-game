$(document).ready(function() {

    var randomNumber;
    var crystalNumber;

    var wins = 0;
    var losses = 0;

    var crystalImage = $(".crystal");

    function gameStart() {

        // Generates a random number between 19 - 120
        randomNumber = Math.floor(Math.random() * 102) + 19;

        // Displays the random in the h2 with class of .number-to-guess
        $(".number-to-guess").text(randomNumber);


        // Generates a random number between 1 - 12
        crystalNumber = Math.floor(Math.random() * 12) + 1;


    }

    gameStart();

    crystalImage.on("click", function() {
        console.log("yay");
    });

});