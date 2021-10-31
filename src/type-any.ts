// Explicit Type
let idUser: any;
idUser = 1; //number
idUser = '1'; //string
console.log('idUser ', idUser);

// Inferred type
let otherId;
otherId = 1;
otherId = '1';
//otherId = true;
console.log('otherId ', otherId);

let surprise: any = 'hello TS';
//surprise.sayHello(); //Error
const res = surprise.substring(6);
console.log('res', res);