let numbers = [0, 1.5, 2.2, 3.1, 4.6, 5.6, 6.3, 7.5];
console.log(numbers[1] - 0.5);
let testString = 'Ihatepizza';
console.log(testString);
const result = testString.replace('hate', 'love').split(',').toString();
console.log(result);

/* promises
function getNumber(arr) {
    let error;
    return new Promise((resolve, reject) => {
        arr.forEach(addOneDecimal);
        function addOneDecimal(num, idx) {
            arr[idx] += num;
        }
        error = false;
        if (!error) {
            resolve();
        } else {
            reject();
        }
    });
}

getNumber(numbers)
.then((arr) => {
    console.log(arr);
});*/