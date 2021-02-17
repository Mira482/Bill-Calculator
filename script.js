var containerEle = document.body.querySelector(".container");
var num1=Number(prompt("what is your bill total?"));
var sum1=(num1*0.07)+num1
var sum2=(sum1*0.05)+sum1
containerEle.innerHTML="Your final bill is $"+sum2+"!";