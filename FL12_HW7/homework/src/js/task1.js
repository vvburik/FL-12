let email = prompt('Enter email');
let password = prompt('Enter password');
let user1 = 'admin@gmail.com';
let user2 = 'user@gmail.com';
let pass1 = 'AdminPass';
let pass2 = 'UserPass';
let number5 = 5;
let number6 = 6;
let oldpass;
let newpass;

if (email === '') {
    alert('Canceled');
} else if (email.length < number5) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if ((email !== user1) && (email !== user2)) {
    alert('I don’t know you');
} else if ((email === user1) && (email === user2)) {
    alert(password)
} else if ((password === '') || !(password)) {
    alert('Canceled');
} else if (!((password === pass1) && (email === user1)) && !((password === pass2) && (email === user2))) {
    alert('Wrong password');
} else if (!(confirm('Do you want to change your password?'))) {
    alert('You have failed the change.');
} else if (!(oldpass = prompt('Enter old password'))) {
    alert('Canceled');
} else if (((oldpass === pass1) || (oldpass === pass2)) && !(newpass = prompt('Enter new password'))) {
    alert('Canceled')
} else if (newpass.length < number6) {
    alert('It’s too short password. Sorry.');
} else if ((prompt('Enter password for confirm')) !== (newpass)) {
    alert('You wrote the wrong password.')
} else {
    alert('You have successfully changed your password.')
}