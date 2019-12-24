// Your code goes here

let d = prompt('Input first falue');
let e = prompt('Input second falue');
let f = prompt('Input last falue');

let a = parseInt(d);
let b = parseInt(e);
let c = parseInt(f);

let q = b * b - 4 * a * c;

if (isNaN(parseInt(d)) || isNaN(parseInt(e)) || isNaN(parseInt(f))) {
    alert('Invalid input data');
} else if (a === 0 || b === 0 || c === 0) {
    alert('Invalid input data');
} else if (q < 0) {
    alert('No solution');
} else if (q === 0) {
    let q1 = -b / 2;
    alert('solution is ' + Math.round(q1));
} else {
    let q2 = (-b + Math.sqrt(q)) / (2 * a);
    let q3 = (-b - Math.sqrt(q)) / (2 * a);
    alert('There is two solutions: First: ' + Math.round(q2) + ' Second: ' + Math.round(q3));
}
