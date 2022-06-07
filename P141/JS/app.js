var date = new Date().getHours()
date <=24 && date<6 ? document.body.style.backgroundColor ='#000000'
: date>=6 && date<12 ? document.body.style.backgroundColor='#33CCFF'
: date>=12 && date<18 ? document.body.style.backgroundColor='#F5B027'
: document.body.style.backgroundColor='#707070'



var squareSide = 9;
console.log("SQUARE-AREA: " + Math.pow(squareSide,2) + " sm")
var environmentRadius = 7
var environmentArea =Math.round(Math.PI * Math.pow(environmentRadius, 2))
console.log("Environment-Area: " + environmentArea + " sm")
