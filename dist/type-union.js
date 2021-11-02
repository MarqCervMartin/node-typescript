"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idUser;
idUser = 10;
idUser = '10';
// Buscar username dado un ID
function getUsernameById(id) {
    // business logic, find the user
    return 'mares';
}
getUsernameById(20);
getUsernameById('20');
//let smallPicture: SquareSize = '200x200';
var smallPicture = '100x100';
var mediumPicture = '500x500';
// Resolutions flipper.com
var PicturesSizes;
(function (PicturesSizes) {
    PicturesSizes["small"] = "75x75";
    PicturesSizes["medium"] = "240x180";
    PicturesSizes["large"] = "500x375";
    PicturesSizes["extraLarge"] = "1024x768";
    PicturesSizes["superLarge"] = "3072x2304";
})(PicturesSizes || (PicturesSizes = {}));
