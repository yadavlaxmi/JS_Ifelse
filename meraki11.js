let readlineSync = require("readline-sync")
var varx=readlineSync.questionInt("enter a number==")
var vary=readlineSync.questionInt("enter a number1==")
if(varx % vary==0){
  console.log("divisible")
}
else{
  console.log("not divisible")
}