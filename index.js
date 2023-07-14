// Is Truthy

//Check value:
// if true, console.log(true)
// if false , console.log(false)

const input = "";

if (input) {
    console.log(true);
} if (input === null) {
    console.log(`The ${input} value is falsy`);
} if (input === undefined) {
    console.log(`${input} is falsy`);
} if (input === 0 ) {
    console.log(`The number ${input} is falsy (the only false number)`)
} if (input === "") {
    console.log(`The empty string is falsy (the only falsy string)`)
}
else if (!input) {
    console.log(`The ${typeof input} value false is falsy`);
}