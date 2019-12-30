let range = 8;
let chance;
let prize;
let currentprize;
let number = 9;
let text = ' Choose a roulette pocket number from 0 to ' + range +
    '\n Attempts left: ' + chance + '\n Total prize: ' + prize +
    '\n Possible prize on current attempt: ' + currentprize + '\n';
let exit;

if (!confirm('Do you want to play a game?')){
    alert('You did not become a billionaire, but can.');
}


else {
    do {
        number = Math.floor(Math.random() *number);
       text = prompt('enter a number of pocket')

        
    }
    while (exit)

    }