// importing the file system library
const fs = require('fs');


//create a function to create a folder (directory)
function createDirectory(folderName){
    // check if the directory is exist:
    if(fs.existsSync(folderName)){
        console.log(`The Directory "${folderName}" is already exist`);
    }else{
        // create the folder method
        fs.mkdirSync(folderName);
        console.log(`"${folderName}" was created successfuly `)
    }
}
// teasting the function
createDirectory("newFolder");
// to create a sub directory you can use "/"
createDirectory("newFolder/subfolder");

