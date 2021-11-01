// Void 
// Explicit type
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'mare', firstName: 'park' });
// Inferred type
function showFormattedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, userName: 'mar', firstName: 'park' });
// Void type, type of datum in variable
var unusable;
unusable = null;
unusable = undefined;
// Never type
function handleError(code, message) {
    //Proccess tyou code here
    //Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
