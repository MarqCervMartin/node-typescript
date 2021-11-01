"use strict";
// Type: object
var user;
user = {}; //Object
user = {
    id: 1,
    username: 'Mar',
    firstName: 'Park',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase de javascript vs tipo paara typescript)
var myObj = {
    id: 1,
    username: 'Mar',
    firstName: 'Park',
    isPro: true
};
var isInstance = myObj instanceof Object; //clase object de javascript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);
