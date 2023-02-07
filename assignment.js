// First Problem
function mindGame(number){
    const inputNumber = number;
    const multiplicationResult = inputNumber*3;
    const addedResult = multiplicationResult + 10;
    const divisionResult =addedResult / 2;
    const substractionResult = divisionResult - 5;
    const result = substractionResult;
    return result; 
}
const mindGameInputNumber = 10;
const mindGameResult = mindGame(mindGameInputNumber);
// console.log(mindGameResult);

// second problem
function evenOdd(value){
    const length = value.length;
    if((length  % 2) === 0){
        return "even";
    }
    else{
        return "odd";
    }
}
const evenOddInputValue = "walii";
const evenOddResult = evenOdd(evenOddInputValue);
// console.log(evenOddResult);

// Third Problem
function isLGSeven(value){
    const substractionResult = value - 7;
    if(substractionResult <= 7){
        return substractionResult;
    }
    else{
        const doubleInputValue = value *2;
        return doubleInputValue; 
    }
}
const isLGSevenInputValue = 20;
const isLGSevenResult =isLGSeven(isLGSevenInputValue);
// console.log(isLGSevenResult);

// Fourth Problem
function findingBadData(value){
    const ageData = value;
    const badData = [];
    for(let i = 0; i < ageData.length; i++){
         const result = ageData[i];
         if(result < 0){
            // console.log(ageData[i]);
            badData.push(ageData[i]);
         }
    }
    return badData.length;
}
const ageData = [-1, -3, 8, 10, 1];
const badDataResult = findingBadData(ageData);
// console.log(badDataResult);

// Fifth Problem
function gemsToDiamond(peraOne, peraTwo, peraThree){
    const peraOneMultiplicationValue = peraOne * 21;
    const peraTwoMultiplicationValue = peraTwo * 32;
    const peraThreeMultiplicationValue = peraThree * 43;
    const totalValue = (
                peraOneMultiplicationValue
                +peraTwoMultiplicationValue
                +peraThreeMultiplicationValue
        );
        if(totalValue >= (1000*2)){
            return (totalValue - 2000);
        }
        else{
            return totalValue;
        }

}
const friendOne   = 40;
const friendTwo   = 40;
const friendThree = 40;
const gemsToDiamondResult = gemsToDiamond(friendOne, friendTwo, friendThree)
// console.log(gemsToDiamondResult);