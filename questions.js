const questions = [
    'What is your name?',
    'What are your doing?',
    'What is your favorite language?'
];

const answers = [];

const ask = (i=0) => {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write('>');
}

ask();

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    
    if(answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});


process.on('exit', () =>{
    process.stdout.write(`${answers[0]} is ${answers[1]} right now. Use ${answers[2]} to code next challenge`);
});

