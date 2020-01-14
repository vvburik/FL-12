let one = '1';
let two = 2;
let three = 3;
let four = '4';
let multi = [1, 2, 3];
let min = [2, '5', 8];
let filter = [2, 5, 8];
let text = 'hey world';
let datalist = [2, 7];

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
  
function convert() {
    let arr = [Number(one), String(two), String(three), Number(four)];
    return arr;
}

function executeforEach(data, value) {
    let multiply = [];
    data.forEach(function (item) {
        multiply.push(item * value)
    });
    return multiply;
}

function mapArray(data, value) {
    let minus = [];
    data.forEach(function (item) {
        minus.push(Number(item) + value)
    });
    return minus;
}

function filterArray(data, value) {
    let multiply = [];

    data.forEach(function (item) {
        if (data = item % value === 0) {
            multiply.push(Number(item));
        }
    });

    return multiply;
}

function flipOver(data) {
    return data.split('').reverse().join('');

}

function makeListFromRange ([start, end]) {
    return Array(end - start + Number(one)).fill().map((_, i) => start + i);
  }


  function getArrayOfKeys(data) {
    let newactor = [];
    data.forEach(function (item) {
        newactor.push(item.name)
    });
    return newactor;
}

console.log(convert(one, two, three, four));
console.log(executeforEach(multi, 3));
console.log(mapArray(min, 3));
console.log(filterArray(filter, 2));
console.log(flipOver(text));
console.log(makeListFromRange(datalist));
console.log(getArrayOfKeys(actors));