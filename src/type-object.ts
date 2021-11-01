// Type: object
let user: object;
user = {}; //Object

user = {
    id: 1,
    username: 'Mar',
    firstName: 'Park',
    isPro: true
};

console.log('user', user);
// Object vs object(Clase de javascript vs tipo paara typescript)
const myObj = {
    id: 1,
    username: 'Mar',
    firstName: 'Park',
    isPro: true
};

const isInstance = myObj instanceof Object;//clase object de javascript

console.log('isInstance', isInstance);
console.log('user.username', myObj.username)