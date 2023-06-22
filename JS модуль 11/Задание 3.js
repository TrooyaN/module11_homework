function func1(num) {
    function func2(num2) {
        return num + num2;
    }
    return func2(2);
}

console.log(func1(1))