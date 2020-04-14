const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('CustomEvent', (msg, user) => {
    
    console.log(`${user}: ${msg}`);
})

//emitter.emit('CustomEvent', 'Hello World', 'Computer');

//emitter.emit('CustomEvent', 'That\'s Cool', 'Jasmeet');

process.stdin.on('data', data => {
    const input = data.toString().trim();
    if(input === 'exit'){
        emitter.emit('CustomEvent', 'Goodbye', 'Process');
        process.exit();
    }
    emitter.emit('CustomEvent', input, 'terminal');
});