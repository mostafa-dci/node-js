// to read the args use process.argv
console.log(process.argv);// => a string array of the arguments 
// to pass an argument, you just have to make a space after running the file with node
// example: node app.js argumentHere
// to display all the arguments, you can just use .foreEach() function because its an array
process.argv.forEach(arg=>{
    console.log(arg)
});
