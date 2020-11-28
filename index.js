const readlineSync = require("readline-sync");
const chalk=require("chalk");
const constants=require("./constants");

const questionaireLevelOne=constants.questionaireLevelOne;
const questionaireLevelTwo=constants.questionaireLevelTwo;
var score=0;
var highestScorer={
  first:{
    name:"Sohail",
    score:10
  },
  second:{
    name:"Umair",
    score:9
  },
  third:{
    name:"Musharraf",
    score:8
  }
  
}
var userName=readlineSync.question(chalk.blueBright.bold("Welcome to DC quiz, please enter your name "));

console.log()
readlineSync.question(chalk.cyanBright("Let's Start "+chalk.yellow.bold(userName)+", hit Enter key to continue."), {hideEchoBack: true, mask: ''});

function play(question,answer){
    console.log();
    console.log(chalk.yellowBright(question.question));
    var userAnswer=readlineSync.question(chalk.yellowBright("a : "+question.options[0]+"\n"+"b : "+question.options[1]+"\n"+"c : "+question.options[2]+"\n"+"d : "+question.options[3]+"\n\n")+chalk.magentaBright("Please chose an option..."+"\n"));
  
    if(userAnswer===answer){
      console.log("----------------")
      console.log(chalk.greenBright("Correct answer"));
      score+=1;
    }
    else{
      console.log("----------------")
      console.log(chalk.red("Wrong answer"));
    }
    console.log("----------------")
    console.log("Current score : "+chalk.bold(score));

  }

  function scoreComparison(currentScore,highestScorer){
    console.log();

    if(currentScore>=highestScorer.first.score){
      console.log(chalk.magentaBright("Congratulations...!!! you have the new high score of "+chalk.bold(currentScore)+", please send us a screenshot so that we can update the highest scorer"))
    }else if(currentScore>=highestScorer.second.score){
      console.log(chalk.magentaBright("Congratulations...!!! you have the new second high score of "+chalk.bold(currentScore)+", please send us a screenshot so that we can update the second highest scorer"))
    }else if(currentScore>=highestScorer.third.score){
      console.log(chalk.magentaBright("Congratulations...!!! you have the new third high score of "+chalk.bold(currentScore)+", please send us a screenshot so that we can update the third highest scorer"))
    }else{
      console.log(chalk.magentaBright("You have scored "+chalk.yellowBright(currentScore)+" points"+"\n\n"+"The List of top 3 Scorers \n"+chalk.yellowBright(highestScorer.first.name)+" : "+chalk.yellowBright(highestScorer.first.score)+"\n"+chalk.yellowBright(highestScorer.second.name)+" : "+chalk.yellowBright(highestScorer.second.score)+"\n"+chalk.yellowBright(highestScorer.third.name)+" : "+chalk.yellowBright(highestScorer.third.score)));
    }
  }

if(score<5){
  console.log();
  readlineSync.question(chalk.cyanBright("This is Level 1 of quiz. Score at least 3 points to move to next level,"+" hit Enter key to continue."), {hideEchoBack: true, mask: ''});

  for(i=0;i<questionaireLevelOne.length;i++){
    play(questionaireLevelOne[i],questionaireLevelOne[i].answer);
  }
}
if(score>=3){
  console.log();
  readlineSync.question(chalk.cyanBright("Congratulations, welcome to level two of this quiz. This is a bit difficult so only diehard fans can score full points, Lets see how you fare"+" hit Enter key to continue."), {hideEchoBack: true, mask: ''});

  for(i=0;i<questionaireLevelTwo.length;i++){
   play(questionaireLevelTwo[i],questionaireLevelTwo[i].answer);
  }
}
scoreComparison(score,highestScorer);

