// think about what variables you're going to need
// think about the logic
// think about the processes

//Global Variables: Your score, target score, wins count, loss count, crystal score; 
    //var radomNum - generateRandom(); 
    // i.e. var score = yourScore + crystalValue; (note this may not be global)
var wins = 0;
var losses = 0;
var targetNumber = "";
var counter = 0; 

var crystalValue = 0;
var crystalArray = [];

crystals = {
    red: "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Red_Crystal_Transparent_PNG_Clip_Art_Image.png?m=1507172105",
    purple: "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Purple_Diamond_PNG_Clip_Art_Image-1908392122.png?m=1509854101",
    green: "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Green_Diamond_PNG_Clip_Art_Image.png?m=1509854101",
    blue: "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Blue_Diamond_Clip_Art_PNG_Image.png?m=1507172105",
}

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

