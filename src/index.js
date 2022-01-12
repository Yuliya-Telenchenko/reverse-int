module.exports = function reverse (number) {
    let stringNumber = String(Math.abs(number));
    let newNumber = '';
    for (let i = stringNumber.length - 1; i >= 0; i--){
        newNumber += stringNumber[i];
    }
    return +newNumber;
}