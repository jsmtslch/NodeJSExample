const grab = flag => {
    var indexOfFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexOfFlag];
}

const user = grab('--user');
const greeting = grab('--greeting');

console.log(`${greeting}, ${user}`);