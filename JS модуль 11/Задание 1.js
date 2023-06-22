arr = [1, 3, 2, 4, 6, 5, 11, 13, null, null, 12, 16, 22, "some string"];
let odd = [];
let even = [];

function showOddOrEven() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] ===  null) {
            console.log(i + 1 + "-й элемент в массиве - null")
        }else if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
            even.push(arr[i])
        }else if (typeof arr[i] === "number" && arr[i] % 2 !== 0) {
            odd.push(arr[i])
        }
    }
    console.log("В массиве " + even.length + " четных чисел");
    console.log("В массиве " + odd.length + " нечетных чисел");
}

showOddOrEven();