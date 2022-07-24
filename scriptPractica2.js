let numberOne = parseInt(prompt("Dame el primer número"));
let numberTwo = parseInt(prompt("Dame el segundo número"));
while(numberOne==numberTwo){
    numberTwo = parseInt(prompt("Dame el segundo número"));
}
if(numberOne>numberTwo){
    console.log("El número mayor es " + numberOne);}
else{   
    console.log ("El número mayor es " + numberTwo)}