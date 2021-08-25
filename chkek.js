/*var x=0;
function n(x=0) {
	return (x+5);
   } 
console.log (n(x));

 var m=0;
function Plus(m){
return (m +10);}
console.log (Plus(m));

var base= 0;
function plusFive (base){
	return Plus(m)+n(x);}



console.log (plusFive (base));*/

var baseNum=5;
var x=0;
var y=0;
function makePlusFunction(baseNum) { 
	return (x=makePlusFunction(baseNum));
	function makePlusFunction(baseNum){
	return (y=makePlusFunction(baseNum));}
	
}
function plus(p){return (x+y); }
console.log ( x);