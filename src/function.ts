// Create photography
/* function createPicture(title, date, size) {  
}; */

type SquareSize = '100x100' | '500x500' | '1000x1000';
// Use typescript and define parameters
function createPicture(title: string, date:string, size: SquareSize) {
    // create photography-
    console.log('create picture using', title, date, size);
};

createPicture('My Birthday', '2022-01-09', '100x100');
//createPicture('Colombia Trip', '2022-01'); => Error

//optional parameters
function createPictureOptional(title?: string, date?:string, size?: SquareSize) {
    // create photography-
    console.log('create picture using', title, date, size);
};
createPictureOptional('Mexico Trip', '2022-01-09', '100x100');
createPictureOptional('Mexico Trip', '2022-01-09');
createPictureOptional('Mexico Trip');
createPictureOptional();

// Flat Arrows Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size,
    }
};

const picture = createPic('Platzi Session', '2022-01-09', '1000x1000');
console.log('picture', picture);