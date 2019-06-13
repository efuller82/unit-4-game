
// creates random number for start of game
var randomStartingNumber = Math.floor(Math.random() * 101 + 19);

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
    // assigns the value to each image ????????
    $("img").each(function (index) {
        // "data-gem" will assign the number from genNums array
        $(this).attr("data-gem", gemNums[index]);
    })
