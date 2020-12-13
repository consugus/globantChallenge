async function getPetImage(pet) {
 // will return a promise for the image
}

const pets= ['cat','dog', 'turtle'];
async function fetchMyPetImages(pets) {
 // get all the pet images as one promise that returns an array
 // turtle is going to return 404, the response should be
 // ['http://mypets.dev/cat.png','http://mypets.dev/dog.png']

    const images = [];

    images = pets.map ( ( pet ) => { return pets[pet]; })

    const len = pets.length;
    for ( let i = 0 ; i < len ; i++ ){
        try { images.push(await getPetImage ( pet ) ); }
        catch ( err ){ throw new Error ('', err) };
    }

    if( image ) { return images; }
    return "Images not found";
}

async function x() {
    if ( Math.random() > 0.5 ) throw new Error( '...' );
    return Promise.resolve( 10 );
 }

 try {
    x()
    .then(  r => console.log( r ) )
    .catch( err => console.log( "error: ", err ) )
    }
 catch ( err ){
     throw new Error ( 'Some message', err )
 };