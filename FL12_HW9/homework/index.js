let one = '1';
let two = 2;
let three = 3;
let four = '4';
let multi = [1, 2, 3];
let min = [2, '5', 8];
let filter = [2, 5, 8];
let text = 'hey world';
let datalist = [2, 7];
let subs = [58, 14, 48, 2, 31, 29];
let number = 30;
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
const date = new Date(2019, 0, 2);
let seconddate = new Date('6/15/2018 09:15:00');


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
    let last = [];

    data.forEach(function (item) {
        data = item % value;
        if (data === 0) {
            last.push(Number(item));
        }
    });
    return last;
}

function flipOver(data) {
    return data.split('').reverse().join('');
}

function makeListFromRange([start, end]) {
    return Array(end - start + Number(one)).fill().map((_, i) => start + i);
}


function getArrayOfKeys(data) {
    let newactor = [];
    data.forEach(function (item) {
        newactor.push(item.name)
    });
    return newactor;
}

function substitute(data) {
    let ar = [];
    data.forEach(function (item) {
        if (item < number) {
            ar.push('*');
        }
        if (item > number) {
            ar.push(item);
        }
    });
    return ar;
}

function getPastDay(data, month) {
    let dat = new Date(data);
    dat.setDate(dat.getDate() - month);
    return dat.getDate();
}

function formatDate(data) {
    if (data === undefined) {
        let curdate = new Date();
        let date = curdate.getFullYear() + '/' + (curdate.getMonth() + 1) + '/' + curdate.getDate()
        return date + ' ' + curdate.getHours() + ':' + curdate.getMinutes();
    } else {
        let inputdate = data;
        let day = inputdate.getFullYear() + '/' + (inputdate.getMonth() + 1) + '/' + inputdate.getDate();
        return day + ' ' + data.getHours() + ':' + data.getMinutes();
    }
}

console.log(convert(one, two, three, four));
console.log(executeforEach(multi, 3));
console.log(mapArray(min, 3));
console.log(filterArray(filter, 2));
console.log(flipOver(text));
console.log(makeListFromRange(datalist));
console.log(getArrayOfKeys(actors));
console.log(substitute(subs));
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));
console.log(formatDate());
console.log(formatDate(seconddate));