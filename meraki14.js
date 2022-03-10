
let readlineSync = require("readline-sync");

var player_name=readlineSync.question("enter the player name==")
console.log("hii",player_name)
console.log("choose any move from stone paper scissor")
var player_choice=readlineSync.question("you choice your move please==")
var computer_choice=readlineSync.question("enter a computer choice==")


if (player_choice==computer_choice){
  console.log("draw")
}
else if (player_choice=="stone" && computer_choice=="scissor"){
  console.log(player_name,"is winner!!")
}
else if (player_choice=="stone" && computer_choice=="paper"){
  console.log("computer_choice is winner!!")
}
else if (player_choice=="scissor" && computer_choice=="paper"){
  console.log(player_name,"is winner!!")
}
else if (player_choice=="scissor" && computer_choice=="stone"){
  console.log("computer_choice is winner!!")
}
else if (player_choice=="paper" && computer_choice=="stone"){
  console.log(player_name,"is winner!!")
}
else if (player_choice="paper" && computer_choice=="scissor"){
  console.log("computer_choice is winner!!")
}