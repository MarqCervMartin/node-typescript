"use strict";
console.log('Types of TypeScriopt');
//*** Number
//Explicit
var phone;
phone = 1;
phone = 5571748569;
//phone = 'hola'; //Error
//Inferred
var phoneNumber = 5571748569;
phoneNumber = 123;
//phoneNumber = true; //Error type
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//*** Type boolean
// Explicit type
var isPro;
isPro = true;
//isPro = 1; //Error type
// Inferred
var isUserPro = false;
isUserPro = true;
//isUserPro = 10; //Error Type
// *** String
var userName = 'mares';
userName = "Mares";
//userName = true; //Error type
// Template String
// Use of back-tick `
var userInfo;
userInfo = "\n    UserInfo:\n    username: " + userName + "\n    firstName: " + (userName + ' Park') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo: ', userInfo);
