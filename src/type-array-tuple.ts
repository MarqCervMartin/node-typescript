// Corchetes []

// Explicit type
let users: string[];
users = ['mar', 'park', 'psv'];
//users = [1, true,'test']; //Error

//Inferred type
let otherUsers = ['mar', 'park', 'psv'];
//users = [1, true,'test']; //Error

// Array<Type>
let pictureTitles: Array<string>
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);

// Propiedades en Array
console.log('users.length', users.length);

// Uso de funciones en Arrays
users.push('PlatziUser');
users.sort();
console.log('users',users);


