// Explicit
var nullVariable;
nullVariable = null;
//nullVariable = 1; //Error!
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable ', nullVariable);
console.log('otherVariable ', otherVariable);
var undefinedVariable = undefined;
//undefinedVariable = 'test'; //Error
var otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);
// Null y undefined: como subtipos
// --strictNullChecks
var albumName;
albumName = null;
albumName = undefined;
