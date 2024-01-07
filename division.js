var x =  3
var y = 2
function next(){
    x=3;
    y=2;
while (x%y != 0){
    x = Math.floor((Math.random() * (100 - 10)+10));
    y = Math.floor((Math.random() * (10-2)+2));
}
z=x/y
console.log(z)
document.getElementById("N").innerHTML=x;
document.getElementById("N2").innerHTML=y;
}
