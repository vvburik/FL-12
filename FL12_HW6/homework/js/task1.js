let d = prompt('Input first value');
let e = prompt('Input second value');
let f = prompt('Input last value');

let a = parseInt(d);
let b = parseInt(e);
let c = parseInt(f);


let num2 = 2;
let num4 = 4;
let q = b * b - num4 * a * c;


if (isNaN(parseInt(d)) || isNaN(parseInt(e)) || isNaN(parseInt(f))) {
    alert('Invalid input data');
} else if (a === 0 || b === 0 || c === 0) {
    alert('Invalid input data');
} else if (q < 0) {
    alert('No solution');
} else if (q === 0) {
    let q1 = -b / num2;
    alert('solution is ' + Math.round(q1));
} else {
    let q2 = (-b + Math.sqrt(q)) / (num2 * a);
    let q3 = (-b - Math.sqrt(q)) / (num2 * a);
    alert('There is two solutions: First: ' + Math.round(q2) + ' Second: ' + Math.round(q3));
}
