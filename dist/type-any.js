"use strict";
// Explicit Type
var idUser;
idUser = 1; //number
idUser = '1'; //string
console.log('idUser ', idUser);
// Inferred type
var otherId;
otherId = 1;
otherId = '1';
//otherId = true;
console.log('otherId ', otherId);
var surprise = 'hello TS';
//surprise.sayHello(); //Error
var res = surprise.substring(6);
console.log('res', res);
