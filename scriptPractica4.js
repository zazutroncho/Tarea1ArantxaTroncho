import {findMean} from "../media.js";
let dice1;
let dice2;
let rollsArray=[];

for(let i=0;i<6000;i++) {
    dice1=Math.floor((Math.random()*6)+1);
    dice2=Math.floor((Math.random()*6)+1);
    rollsArray.push(dice1+dice2);

}
console.log(findMean(rollsArray));


