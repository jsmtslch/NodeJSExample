console.log(process.pid);

console.log(process.versions.node);

console.log(process.argv);

const [,,firstName,lastName] = process.argv;
console.log(`Your Name is ${firstName} ${lastName}`)