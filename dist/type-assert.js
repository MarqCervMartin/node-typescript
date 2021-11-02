"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket sintax
var username;
username = 'mares';
// tenemos una cadena, TS confía en mi.
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
console.log('message', message);
var usernameWithId = 'marescervantes 1';
// Como obtener el username?
username = usernameWithId.substring(0, 14);
console.log('Username only', username);
// Sintaxis as
message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
var helloUser;
helloUser = 'hello marescervantes';
username = helloUser.substring(6);
console.log('username', username);
