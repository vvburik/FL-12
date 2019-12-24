let d = prompt('Input a length of first side');
let e = prompt('Input a length of second side');
let f = prompt('Input a length of last side');

let a = parseInt(d);
let b = parseInt(e);
let c = parseInt(f);

if (isNaN(parseInt(d)) || isNaN(parseInt(e)) || isNaN(parseInt(f))) {
    alert('input values should be ONLY numbers');
}

if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Triangle doesn’t exist');
} else if (a === b && b === c && c === a) {
    alert('Triangle is equivalent');
} else if (b === c && c === b && a !== c || a === c && c === a && b !== c || a === b && b === a && c !== b) {
    alert('Triangle is isosceles');
} else {
    alert('Triangle is scalene');
}