// Void 

// Explicit type
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
}

showInfo({id: 1, username: 'mare', firstName:'park'});

// Inferred type
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({id: 1, userName: 'mar', firstName: 'park'});

// Void type, type of datum in variable
//let unusable: void;
//unusable = null;
//unusable = undefined;

// Never type

function handleError(code: number, message: string): never{
    //Proccess tyou code here
    //Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
} catch (error) {
    
}

function sumNumbers(limit: number): never{
    let sum = 0;
    while(true){
        sum++;
    }
}
// Infinit cycle, never finish
sumNumbers(10)