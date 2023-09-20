var buttoncolours=["red","blue","green","yellow"]

var gamePattern=[]
var userClickedPattern=[];

var level=0;
started = false;

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("LEVEL "+ level);
        nextsequence();
        started=true;
    }})

$(".btn").click(function(){
    var userChosenColor= $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswers(userClickedPattern.length-1);    

})

function checkAnswers(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success")

    if(userClickedPattern.length==gamePattern.length){
        setTimeout(function () {
            nextsequence();
          }, 1000);
    }
    }
    else{
        playSound("wrong")
        $("document").addClass("game-over")
        setTimeout(function(){
            $("document").removeClass("game-over")
        },200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startover();
}
}


function nextsequence(){

userClickedPattern=[];
level++;
$("#level-title").text("Level " + level);

    var randomNumber=Math.floor(Math.random(randomNumber)*4)
    var randomChosenColour=buttoncolours[randomNumber];
    gamePattern.push(randomChosenColour); 

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); 
    playSound(randomChosenColour);
}   

function playSound(name){
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play(); 
}

function animatePress(currentColor){
    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100); 
$("#"+currentColor).addClass("pressed")
setTimeout(function(){
    $("#"+currentColor).removeClass("pressed") 
},100)
}

function startover(){
    level=0;
    gamePattern=[]
    started=false
}






