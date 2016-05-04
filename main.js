var userChoice;
var computerChoice;

/*************Main functions - user choice ****************/
$(".fa").click(function() {
    userChoice = this.id;
    $(".sec--main__result").html(userChoice);
    setTimeout( function(){$(".sec--main__vs").css("display", "inline-block")}, 500);
    setTimeout(start, 1500);
    setTimeout(function() {compare(userChoice, computerChoice)}, 2500);
    setTimeout(function(){$(".play-again").css("display", "block")}, 2500);
    $(".sec--main__vs").css("display", "none");
    $(".sec--main__computer").empty();
    $(".sec--main__winner").empty();
    $(".play-again").css("display", "none");
    computerChoice = Math.random();
});

/************Computer choice***********************/
function start(){
    if ( $(".fa").click) {
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        } 
                $(".sec--main__computer").html(computerChoice);
    }
};

/*************Compare************************/
function compare(choice1, choice2) {
    if (choice1 == choice2) {
        $(".sec--main__winner").html("Draw!");
    }
    else if (choice1 == "rock") {
        if ( choice2 == "scissors") {
            $(".sec--main__winner").html("You win!");
            }
        else {
            $(".sec--main__winner").html("You lose!");
            }
        }
    else if (choice1 == "paper") {
        if ( choice2 == "rock") {
            $(".sec--main__winner").html("You win!");
            }
        else {
            $(".sec--main__winner").html("You lose!");
            }
        }
    else if (choice1 == "scissors") {
        if ( choice2 == "rock") {
            $(".sec--main__winner").html("You lose!");
            }
        else {
            $(".sec--main__winner").html("You win");
            }
        }
};
/****************Click play again**********************/
$(".play-again").click(function(){ 
    $(".sec--main__result").empty();
    $(".sec--main__vs").css("display", "none");
    $(".sec--main__computer").empty();
    $(".sec--main__winner").empty();
    $(".play-again").css("display", "none");
});
