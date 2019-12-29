let email = prompt('Enter email');
let password = prompt('Enter password');
let user1 = 'admin@gmail.com';
let user2 = 'user@gmail.com';
let pass1 = 'AdminPass';
let pass2 = 'UserPass';
let newpass1 = prompt('Enter new password');
let newpass2 = prompt('Enter new password');;

function confirmation() {
    if (confirm('Do you want to change your password?')) {
        return prompt('Enter your old password');
    } else {
        alert('You have failed the change.');
    }
}

if ( email === '') {
    alert('Canceled');
}

else if ( email.length < 5 ) {
    alert('I don\'t know any emails having name length less than 5 symbols');
}

else if ((email !== user1) && (email !== user2)) {
    alert('I don’t know you');
}

else if ((email === user1) && (email === user2)) {
    alert(password)
}

else if ( (password === '') || !(password)) {
    alert('Canceled');
}
else if ( !((password === pass1) && (email === user1)) && !((password === pass2) && (email === user2)) ) {
    alert('Wrong password');
}



