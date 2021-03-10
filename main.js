// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘



function ageToAbilities(age) {
        if (age <= - 15) {
        status = "You can't drive."; 
        {
        
        else if  (age === 16, 17) 
        status = "You can drive but not vote.";
        {

        else if  (age === 18, 19, 20, 21, 22, 23, 24) 
        status = "you can vote but not rent a car.";
        {

        else  (age > - 25) 
        status = "you can do pretty much anything.";
        }
        

}
ageToAbilities(15)  


//-------------------------------------------------------------

function oddIndices(num) {
    let num = ['0, 1, 2, 3, 4, 5, 6, 7, 8, 9'];
        for (var i = 1; i < num.length; i++) {
        if (num[i] !== num[0]) {
        odd = num[i];
        }
    }
    return odd;
}

//-------------------------------------------------------------


function numOddValues(str) {
    let doesOddValues = false
    
        const validDigits = '0123456789'
            validDigits.includes(char)

    for (const char of str) {
        if (
            char === '0' ||
            char === '1' ||
            char === '2' ||
            char === '3' ||
            char === '4' ||
            char === '5' ||
            char === '6' ||
            char === '7' ||
            char === '8' ||
            char === '9' 
    ) {
        doesOddValues = true;
    }
    }
    
    
    return doesOddValues;
    
}

//-------------------------------------------------------------

function averageStringLength(str) {
    const length = a => a.length;
    const sum = times.reduce((a, b) => a + b, 0);
    const avg = (sum / times.length) || 0;
}

console.log(result)

//-------------------------------------------------------------

function firstPunctuationIndex(str) {
    let numPunctuationMarks = 0;
    for (let i = str.length - 1; i >= 0; i--) {
    
    if (str[i] === '!') {
        numPunctuationMarks++;
    } else {
        break;
    }
    }

    let PunctuationStr = '';
    for (let i = 0; i < str.length - 1 - 
    numPunctuationMarks; i++) {
    PunctuationStr += str[i];
    }

    return PunctuationStr + '!';
}

console.log.firstPunctuationIndex('hello!')


//-------------------------------------------------------------

function getPlace() {
    return
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
