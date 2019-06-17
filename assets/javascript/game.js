// total score variable to be used later; global scope.
var totalScore= 0;
var wins = 0;
var losses = 0;

//reset function
function resetGame() {
    
}


// creates random number for start of game
var randomStartingNumber =  Math.floor(Math.random() * 101 + 19);



// puts random number into div
document.getElementById("start_number").innerHTML = randomStartingNumber;

// array for holding gem random numbers
var gemNums = [];
    //creating the function for generating gem numbers
    function generateGemNum() {
        // for loop
        for (var i = 0; i < 4; i++) { 
            // creating random number (between 1 & 12 for gem one)
            var gemRandomNums = Math.floor(Math.random() * 12 +1);
            // push 4 random numbers into array
            gemNums.push(gemRandomNums);
        }
    }
// call gem random number function
generateGemNum();
    // assigns the value to each image ???????? found this on stackoverflow; please help me here; kind of like a loop; 
    $("img").each(function (index) {
        // "data-gem" will assign the number from genNums array
        $(this).attr("data-gem", gemNums[index]);
    })

    
    // now I want to click on a gem to add its stored number into #total_score div
    // and this is where everything seems to go wrong
$("img").on("click", function() {
    
    // extracts value from data attribute
    //$(this) keyword specifies that we should be extracting gem value of clicked gem
    // .attr("data-gem") allows us to grab the value out of the "data-gem" attribute
    var gemValue = ($(this).attr("data-gem"));
    //since attribues on html elements are strings, we must convert it to an integer before adding to the counter.
    gemValue = parseInt(gemValue);
    
    // adding each click to total score
    totalScore += gemValue;

    document.getElementById("total_score").innerHTML = totalScore;

    // winning/losing/resetting game
    if(totalScore === randomStartingNumber){
        wins++;
        gemNums.length = 0;
        generateGemNum();
        randomStartingNumber =  Math.floor(Math.random() * 101 + 19);
        document.getElementById("start_number").innerHTML = randomStartingNumber;
        totalScore = 0;
        document.getElementById("total_score").innerHTML = totalScore;
    }

    if(totalScore > randomStartingNumber){
        losses++;
        gemNums.length = 0;
        generateGemNum();
        randomStartingNumber =  Math.floor(Math.random() * 101 + 19);
        document.getElementById("start_number").innerHTML = randomStartingNumber;
        totalScore = 0;
        document.getElementById("total_score").innerHTML = totalScore;
    }
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
});


