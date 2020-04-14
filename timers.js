const waitime = 10000;

const waitInterval = 500;

let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting: ${p}%`);
};

console.log(`setting the wait time to ${waitime / 1000} seconds`);

const timeoutfunc = () =>{
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("waiting done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timeoutfunc, waitime);

