// initial declarations:
// total wins, losses, score total
var wins = 0;
var losses = 0;
var randomNum = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var finalScore = 0;

resetAndShowNumbers();
displayResults();

function resetAndShowNumbers() {


    // random number selection for computer; 0-100
    randomNum = Math.floor(Math.random() * 100);

    // assign random number value to each gem, value = less than computer number
    gem1 = Math.floor(Math.random() * randomNum);
    gem2 = Math.floor(Math.random() * randomNum);
    gem3 = Math.floor(Math.random() * randomNum);
    gem4 = Math.floor(Math.random() * randomNum);

    // set score to 0 and display
    finalScore = 0;
    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);
}

// this code = display on page
function displayResults() {
    
    $("#finalScore").html(finalScore);
    $("#random").html(randomNum);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

// button behavior: when pressed, button value is added to total score.
// button1
// increases value of score by its' value
$("#gem1").click(function () {
    finalScore = finalScore + gem1;

// compare score with random number
    // 1. if score > random number, player loses.
    if(finalScore>randomNum){
        //loss
        losses++;
        resetAndShowNumbers();
    }else if(finalScore === randomNum){
        //win
        wins++;
        resetAndShowNumbers();
    }else{
        //do nothing.
    }
    displayResults();
});

        // check if it's larger than the random number

    // button2
    $("#gem2").click(function () {
        finalScore = finalScore + gem2;
    
    // compare score with random number
        // 1. if score > random number, player loses.
        if(finalScore>randomNum){
            //loss
            losses++;
            resetAndShowNumbers();
        }else if(finalScore === randomNum){
            //win
            wins++;
            resetAndShowNumbers();
        }else{
            //do nothing.
        }
        displayResults();
    });
    // button3
    $("#gem3").click(function () {
        finalScore = finalScore + gem3;
    
    // compare score with random number
        // 1. if score > random number, player loses.
        if(finalScore>randomNum){
            //loss
            losses++;
            resetAndShowNumbers();
        }else if(finalScore === randomNum){
            //win
            wins++;
            resetAndShowNumbers();
        }else{
            //do nothing.
        }
        displayResults();
    });
    // button4
    $("#gem4").click(function () {
        finalScore = finalScore + gem4;
    
    // compare score with random number
        // 1. if score > random number, player loses.
        if(finalScore>randomNum){
            //loss
            losses++;
            resetAndShowNumbers();
        }else if(finalScore === randomNum){
            //win
            wins++;
            resetAndShowNumbers();
        }else{
            //do nothing.
        }
        displayResults();
    });
