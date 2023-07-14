// Is Truthy

//Check value:
// if true, console.log(true)
// if false , console.log(false)

const input = ''

if(input){
    console.log(true);
}else if(input === ''){
    console.log(`The empty string is falsy (the only falsy string)`);
}else if(null){
    console.log(`The ${input} is falsy`);
}else if(undefined){
    console.log(`${input} is falsy`);
}else if(input === 0){
    console.log(`The number ${input} is falsy(the only falsy number`);
}else if(!input){
    console.log(`The ${typeof input} false is falsy`);
}