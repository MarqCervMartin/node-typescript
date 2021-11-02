export {};
// <tipo> // Angle Bracket sintax
let username: any;
username = 'mares';

// tenemos una cadena, TS confía en mi.
let message: string = (<string>username).length > 5 ?
                        `Welcome ${username}`:
                        'Username is too short';

console.log('message', message);

let usernameWithId : any = 'marescervantes 1';
// Como obtener el username?
username = (<string>usernameWithId).substring(0,14);
console.log('Username only', username);

// Sintaxis as
message = (username as string).length > 5 ?
                        `Welcome ${username}`:
                        'Username is too short';

let helloUser: any;
helloUser = 'hello marescervantes';
username = (helloUser as string).substring(6);
console.log('username',username);