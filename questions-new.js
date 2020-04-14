const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    'What is your name?',
    'Where do you live?',
    'What are you going to do with NodeJS?'
];

const survey = function(questions, done){
    const answers = [];
    const [firstQ, secondQ, thirdQ] = questions;

    const qanswered = function(answer){
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], qanswered);
        }
        else{
            done(answers);
        }
    }

    rl.question(firstQ, qanswered);
}

survey(questions, answers => {
    console.log('Thanks for your answers');
    console.log(answers);
    process.exit();
});