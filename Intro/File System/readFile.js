// Importing th file system library
const fs = require('fs');

fs.readFile("./data.txt", (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data.toString())
    }
})