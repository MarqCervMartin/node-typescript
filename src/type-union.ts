export {}

// 10, '10
/*
let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id: number | string){
    // business logic, find the user
    return 'mares';
}

getUsernameById(20);
getUsernameById('20');
*/

// Alias de Tipos
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id: IdUser): Username{
    // business logic, find the user
    return 'mares';
}

getUsernameById(20);
getUsernameById('20');

// Tipos literales
// 100 x 100, 500x500, 1000x1000 only accept

type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200';
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';

// Resolutions flipper.com
enum PicturesSizes {
    small = '75x75',
    medium = '240x180',
    large = '500x375',
    extraLarge = '1024x768',
    superLarge = '3072x2304'
}

type PhotoSizesType = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304'

