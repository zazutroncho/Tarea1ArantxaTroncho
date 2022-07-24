const arrayOfNumbers=[20,-48,15,110,351];
let evenCount= 0;
let hundredCount= 0;

for(let i=0;i<arrayOfNumbers.length;i++){
    if (arrayOfNumbers[i]%2!==0)  evenCount++;
    if (arrayOfNumbers[i]>100) hundredCount++;
}
console.log(`Hay ${evenCount} números impares`);  
console.log(`Hay ${hundredCount} números mayores que 100`);