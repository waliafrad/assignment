// First Problem. 
/* A simple estimate code goes here with a simple validation */
function mindGame(number){
        if(typeof(number) == "number"){
        const inputNumber = number;
        const multiplicationResult = inputNumber*3;
        const addedResult = multiplicationResult + 10;
        const divisionResult =addedResult / 2;
        const substractionResult = divisionResult - 5;
        const result = substractionResult;
        return result;
    }else{
        return "input value must have to be Number";
    }
}
const mindGameInputNumber = 33;
const mindGameResult = mindGame(mindGameInputNumber);
// console.log(mindGameResult);

// second problem
/* A simple estimate of string value counting, and
How many indexes does a character have,
code goes here with a simple validation */
function evenOdd(value){
    if(typeof(value) == "string"){

        const length = value.length;
        if((length  % 2) === 0){
            return "even";
        }
        else{
            return "odd";
        }
    }else{
        return "input value must have to be string"
    }
}
const evenOddInputValue = "chatgpt";
const evenOddResult = evenOdd(evenOddInputValue);
// console.log(evenOddResult);

// Third Problem
/* A simple estimate code goes here with a simple validation */
function isLGSeven(value){
    if(typeof(value) == "number"){

        const substractionValue = value - 7;
        if(substractionValue <= 7){
            return substractionValue;
        }
        else{
            const doubleInputValue = value *2;
            return doubleInputValue; 
        }
    }else{
        return "input value must have to be Number"
    }
}
const isLGSevenInputValue = 15;
const isLGSevenResult =isLGSeven(isLGSevenInputValue);
// console.log(isLGSevenResult);

// Fourth Problem
/* Methods of extracting bad data with a simple validation */
function findingBadData(value){
    if(value){
        badData = [];
        for(let i = 0; i< value.length; i++){
            if(typeof(value[i]) == "number"){
                const result = value[i];
                if(result < 0){
                    // console.log(ageData[i]);
                    badData.push(value[i]);
                }
            }else{
                return "each value have to be number";
            }
        }
        return badData.length;

    }
}
const ageData = [1, -12, -2, 5];
const badDataResult = findingBadData(ageData);
// console.log(badDataResult);

// Fifth Problem
/*three friends gems convert to dimonds */
function gemsToDiamond(peraOne, peraTwo, peraThree){
    if(typeof(peraOne) == "number"){
        if(typeof(peraTwo) == "number"){
            if(typeof(peraThree) == "number"){
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
            }else{
                return "input value must have to be Number"
            }
        }else{
            return "input value must have to be Number"
        }
    }
    else{
        return "input value must have to be Number"
    }

}
const friendOne   = 100;
const friendTwo   = 5;
const friendThree = 1;
const gemsToDiamondResult = gemsToDiamond(friendOne, friendTwo, friendThree)
console.log(gemsToDiamondResult);





