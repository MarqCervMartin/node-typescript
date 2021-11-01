// Orientacion para fotografias
/*
const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3;
*/

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama,
};
console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
};

const country: Country = Country.Mexico;
console.log('country', country);
