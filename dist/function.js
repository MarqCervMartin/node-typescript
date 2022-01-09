"use strict";
// Create photography
/* function createPicture(title, date, size) {
}; */
// Use typescript and define parameters
function createPicture(title, date, size) {
    // create photography-
    console.log('create picture using', title, date, size);
}
;
createPicture('My Birthday', '2022-01-09', '100x100');
//createPicture('Colombia Trip', '2022-01'); => Error
//optional parameters
function createPictureOptional(title, date, size) {
    // create photography-
    console.log('create picture using', title, date, size);
}
;
createPictureOptional('Mexico Trip', '2022-01-09', '100x100');
createPictureOptional('Mexico Trip', '2022-01-09');
createPictureOptional('Mexico Trip');
createPictureOptional();
// Flat Arrows Function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size,
    };
};
var picture = createPic('Platzi Session', '2022-01-09', '1000x1000');
console.log('picture', picture);
