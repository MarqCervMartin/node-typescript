console.log('Types of TypeScriopt');

//*** Number
//Explicit
let phone : number;
phone = 1;
phone = 5571748569;
//phone = 'hola'; //Error

//Inferred
let phoneNumber = 5571748569;
phoneNumber = 123;
//phoneNumber = true; //Error type

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//*** Type boolean
// Explicit type
let isPro: boolean;
isPro = true;
//isPro = 1; //Error type

// Inferred
let isUserPro = false;
isUserPro = true;
//isUserPro = 10; //Error Type


// *** String
let userName: string = 'mares';
userName = "Mares";
//userName = true; //Error type

// Template String
// Use of back-tick `

let userInfo: string;
userInfo = `
    UserInfo:
    username: ${userName}
    firstName: ${userName + ' Park'}
    phone: ${phone}
    isPro: ${isPro}
`
console.log('userInfo: ', userInfo);
