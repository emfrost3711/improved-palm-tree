//GLOBAL VARIABLES//
var wins = 0;
var losses = 0;
var crystalValue = 0;
var counter = 0;
var targetNumber = 0;
var crystal = []


//RESET FUNCTION//
function reset() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#currentScore").text(counter);
    $("#targetNumber").text(targetNumber);
    crystal = {
        blue: Math.floor(Math.random() * 13 + 1),
        green: Math.floor(Math.random() * 13 + 1),
        red: Math.floor(Math.random() * 13 + 1),
        purple: Math.floor(Math.random() * 13 + 1),
    }
    $("#blue").attr("data-value", crystal.blue)
    $("#green").attr("data-value", crystal.green)
    $("#red").attr("data-value", crystal.red)
    $("#purple").attr("data-value", crystal.purple)
    // console.log("purple" + crystal.purple)
    // console.log("red" + crystal.red)
    // console.log("blue" + crystal.blue)
    // console.log("green" + crystal.green)

}


//START FUNCTION//
function start() {

   reset ()

    $(".crystalPic").on("click", function () {
        // console.log("Crystal clicked!");
        var crystalValue = $(this).attr("data-value");
        // console.log(crystalValue);

        // console.log("counter is " + counter);

        counter += parseInt(crystalValue);

        // console.log("counter is " + counter);

        $("#currentScore").text(counter);

        if (counter > targetNumber) {
            // console.log("User loses!");
            //Update game variables
            losses++;
            // Update display
            $("#losses").text(losses);
            // console.log("counter is " + counter);
            reset();

        } else if (counter === targetNumber) {
            // console.log("User wins!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
        // console.log("counter is " + counter);
    })
}


//CALL START FUNCTION//
start()