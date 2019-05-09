// think about what variables you're going to need
// think about the logic
// think about the processes

//Global Variables: Your score, target score, wins count, loss count, crystal score; 
    //var radomNum - generateRandom(); 
    // i.e. var score = yourScore + crystalValue; (note this may not be global)
    var wins = 0;
    var losses = 0;
    
function start (){   

var targetNumber = Math.floor(Math.random() * (120-19) +19);
// console.log(targetNumber + "this is our target number");
var counter = 0; 

var crystalValue = 0;
var crystalArray = [];

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
// console.log("purple" + crystal.purple)
// console.log("red" + crystal.red)
// console.log("blue" + crystal.blue)
// console.log("green" + crystal.green)
$("#targetNumber").text(targetNumber);  

$(".crystalPic").on("click", function () {
// console.log("Crystal clicked!")
var crystalValue=$(this).attr("data-value");
// console.log(crystalValue)

counter+=parseInt(crystalValue)
console.log(counter + "counter")
$("#currentScore").text(counter);

if (counter > targetNumber) {
    console.log("User loses!")
    //increase losses
    //call restart

} else if (counter === targetNumber) {
    console.log("User wins!")
    //increase wins
    //call restart
} 
})
//


} 
start ()


//Logic to write in Functions:
    //three functions total-- keep them "dry" (do not repeat yourself)

    //Random Number Function
        //assign a value for each crystal
        //function = generateRandom(); 
        //"return" is  keyword to use in code
        //start the game
    


    //click event function

            //rather than writing 4 dif click events, give all 4 crystals the same class; think about the ways to differentiate the crystals too like a data- attribute for each one to "hide the crystal value"
       //array of crystals to loop through; assign a value to each crystal in the loop function
    //dynamically create the crystals; this will be part of the start game function and will involve a loop
            
    //reset function should include resetting the crystal values (clear out "your score")
    //since your score depends on the crystal value ++ will no longer work


    //how to generate the crystals on the page
        // each crystal needs (to be put into a div w/id crystals)
        //    a shared class
        //    a point/score 
        //    an image
        //    we need to create an object to store all the crystals w/ a score, an image (a string holding the path to the image), a color; 
        //    then make an array of your objects!


    //for the reset use .empty 
    // start/reset game
            // clear variables (esp your score)
            // set target score
            // assign a value for each crystal
            // see recording 

