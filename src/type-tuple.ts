export {};

// [1, 'user']
let user: [number, string];
user = [1, 'marti'];

console.log('user',user);
console.log('username',user[1]);
console.log('username.length',user[1].length);
console.log('id',user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Park', true];
console.log('userInfo',userInfo);

//Array of tuples
let array: [number, string][] = [];
array.push([1, 'luis']);
array.push([2, 'daniel']);
array.push([3, 'marco']);
console.log('array',array);

// Uso de funciones Array
// marco -> marco01

array[2][1] = array[2][1].concat('01');
console.log('array',array);



