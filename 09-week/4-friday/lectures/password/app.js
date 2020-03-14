let pbkdf2 = require('pbkdf2');
let crypto = require('crypto');

let password = "some password";

// password + salt = apply crypto algorithm => store in database
// Salt= adds random string of characters

let salt = crypto.randomBytes(20).toString('hex');
// console.log(salt);

let key = pbkdf2.pbkdf2Sync(password, salt, 36000, 256, 'sha256');
// console.log(key);

let hash = key.toString('hex');

// console.log(hash);

// this is stored in our database
let stored_pass = `pbkdf2_sha256$36000$${salt}$${hash}`

// 1. Validate user password

// 2. Check a password
let pass_parts = stored_pass.split('$');
//retrieve ['pbkdf2_sha256', 'salt', 'hash']

// let newPassword = 'some password';
let keyNewLogin = pbkdf2.pbkdf2Sync(
    'some password',
    pass_parts[2],
    parseInt(pass_parts[1]),
    256, 'sha256'
)

let hashNewLogin = keyNewLogin.toString('hex')

if(hashNewLogin === pass_parts[3]){
    console.log('passwords match!');
} else {
    console.log('Oops, wrong password');
}