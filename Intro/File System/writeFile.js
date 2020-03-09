// Importing th file system library
const fs = require('fs');

// write a file:
const data = "This is the Text what Node js writet to..."
fs.writeFile("./data.txt", data, (error=>{
    if(error){
        console.log(error);
    }else{
        console.log("data.txt was created successfuly");
    }
}))