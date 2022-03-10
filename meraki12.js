let readlineSync = require("readline-sync")
var varx=readlineSync.questionInt("enter a number")
if (varx%2==0){
console.log("even")
}
else if (varx%2!=0){
  console.log("not divisible")
}

