//GLOBAL VARIABLES//
    var wins = 0;
    var losses = 0;
    var crystalValue = 0;

//START FUNCTION//
function start (){   

var targetNumber = Math.floor(Math.random() * (120-19) +19);
// console.log(targetNumber + "this is our target number");
var counter = 0; 

var crystal = {
    blue: Math.floor(Math.random() * 13 +1),
    green: Math.floor(Math.random() * 13 +1),
    red: Math.floor(Math.random() * 13 +1),
    purple: Math.floor(Math.random() * 13 +1)
   
} 
$("#blue").attr("data-value", crystal.blue)
$("#green").attr("data-value", crystal.green)
$("#red").attr("data-value", crystal.red)
$("#purple").attr("data-value", crystal.purple)
console.log("purple" + crystal.purple)
console.log("red" + crystal.red)
console.log("blue" + crystal.blue)
console.log("green" + crystal.green)
$("#targetNumber").text(targetNumber);  

$(".crystalPic").on("click", function () {
console.log("Crystal clicked!");
var crystalValue=$(this).attr("data-value");
console.log(crystalValue);

counter+=parseInt(crystalValue);
console.log(counter + "counter");
$("#currentScore").text(counter);

if (counter > targetNumber) {
    console.log("User loses!");
    losses++;
    $("#losses").text(losses);
    $("#currentScore").click(function(){
        $("currentScore").empty();
      });

} else if (counter === targetNumber) {
    console.log("User wins!");
    wins++;
    $("#wins").text(wins);
} 
})
}

 //CALL START FUNCTION 
start ()


//reset/empty function


