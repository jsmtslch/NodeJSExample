const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

module.exports = function(questions, done = f => f){
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