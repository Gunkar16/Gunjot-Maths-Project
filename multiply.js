function next(){
x = Math.floor((Math.random() * (1000 - 10) +10));
y = Math.floor((Math.random() * (10 - 2)+2));
z=x*y
console.log(z)
document.getElementById("N").innerHTML=x;
document.getElementById("N2").innerHTML=y;
}
