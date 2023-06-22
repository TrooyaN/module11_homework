function checkNumber(num) {
    let result = "Данные неверны";

    if (num > 1000) {
        return result;
    }else if (num == 1 || num === 0) {
        result = "Число непростое";
        return result;
    }else if (num % num !== 0 || num % 1 !== 0) {
        result = "Число непростое";
        return result;
    }else if (num % num === 0 && num % 1 === 0) {
        result = "Число простое";
        return result;
    }
}

console.log(checkNumber(4.25));