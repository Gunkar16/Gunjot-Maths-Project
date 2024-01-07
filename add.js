function next(){
x = Math.floor((Math.random() * (10000 - 1000) + 1000));
y = Math.floor((Math.random() * (10000 - 1000) + 1000));

z=x+y
console.log(z)
document.getElementById("N").innerHTML=x;
document.getElementById("N2").innerHTML=y;
}
