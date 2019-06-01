'use strict';

const questions = [
    {
        question: 'What is the name of Ron Weasley’s pet rat?',
        answers: [
            'Peter',
            'Dobby',
            'Scabbers',
            'Peeves'
        ],
        correctAnswer: 'Scabbers'
    },
    {
        question: 'What is Harry Potter’s first broomstick model?',
        answers: [
            'Firebolt',
            'Cleansweep Eleven',
            'Comet 260',
            'Nimbus 2000'
        ],
        correctAnswer: 'Nimbus 2000'
    },
    {
        question: 'Which ghost represents the House of Hufflepuff?',
        answers: [
            'Nearly Headless Nick',
            'Grey Lady',
            'Bloody Baron',
            'Fat Friar'
        ],
        correctAnswer: 'Fat Friar'
    },
    {
        question: 'Which one of these is NOT one of Voldemort’s horcruxes?',
        answers: [
            'The Sorting Hat',
            'Helga Hufflepuff’s Cup',
            'Nagini',
            'Harry Potter'
        ],
        correctAnswer: 'The Sorting Hat'
    },
    {
        question: 'Where was the headquarters for the Order of the Phoenix?',
        answers: [
            'The Room of Requirement',
            'Grimmauld Place',
            'Godric’s Hollow',
            'The Shrieking Shack'            
        ],
        correctAnswer: 'Grimmauld Place'
    },
    {
        question: 'Who was the Minister of Magic after Cornelius Fudge?',
        answers: [
            'Rufus Scrimgeour',
            'Millicent Bagnold',
            'Pius Thicknesse',
            'Kingsley Shacklebolt'
        ],
        correctAnswer: 'Rufus Scrimgeour'
    },
    {
        question: 'What is Albus Dumbledore’s brother’s name?',
        answers: [
            'Atticus',
            'Aberforth',
            'Abraham',
            'Augustus'
        ],
        correctAnswer: 'Aberforth'
    },
    {
        question: 'What kind of dragon did Harry face in his first task of the Triwizard Tournament?',
        answers: [
            'Swedish Short-Snout',
            'Common Welsh Green',
            'Chinese Fireball',
            'Hungarian Horntail'
        ],
        correctAnswer: 'Hungarian Horntail'
    },
    {
        question: 'What was the portkey used to travel to the Quidditch World Cup in the Goblet of Fire?',
        answers: [
            'Jacket',
            'Sneaker',
            'Broomstick',
            'Boot'
        ],
        correctAnswer: 'Boot'
    },
    {
        question: 'How many players on the field make up one Quidditch team?',
        answers: [
            'Six',
            'Seven',
            'Eight',
            'Nine',
            'Twelve'
        ],
        correctAnswer: 'Seven'
    },
];

let questionNumber = 0;
let score = 0;
let correctAnswer = 'none';
let submitButton = $(`<button type='submit' form='form1' id='submitAnswer' class='submitAnswer js-submitAnswer'>Submit</button>`);
let nextQuestion = $(`<button type='button' class='nextQuestion js-nextQuestion'>Next Question</button>`);
let restartButton = $(`<button type='button' class='restartButton js-restartButton'>Restart Quiz</button>`)

function generateProgress() {
    let progress = $(`<div class="progress">Question ${questionNumber + 1} of 10</div>`);
    return progress;
}

function generateQuestion() {
    let questionLine = $(`<h1 class="question">${questions[questionNumber].question}</h1>`);
    return questionLine;
}

// generate QnA html
function generateAnswerForm() {
    let answerSelection = $(
    `<form id='form1'>
      <fieldset class="answers">
        <legend>Question ${questionNumber + 1}</legend>
          <div class="wholeAnswer">
            <input class="choice answerA" type="radio" name="answer" id="A" value='${questions[questionNumber].answers[0]}' required checked>
            <label class="answerA answerText" for="A">${questions[questionNumber].answers[0]}</label>
          </div>
          <div class="wholeAnswer">
            <input class="choice answerB" type="radio" name="answer" id="B" value="${questions[questionNumber].answers[1]}" required>
            <label class="answerB answerText" for="B">${questions[questionNumber].answers[1]}</label>
          </div>
          <div class="wholeAnswer">
            <input class="choice answerC" type="radio" name="answer" id="C" value="${questions[questionNumber].answers[2]}" required>
            <label class="answerC answerText" for="C">${questions[questionNumber].answers[2]}</label>
          </div>
          <div class="wholeAnswer">
            <input class="choice answerD" type="radio" name="answer" id="D" value="${questions[questionNumber].answers[3]}" required>
            <label class="answerD answerText" for="D">${questions[questionNumber].answers[3]}</label>
          </div>
      </fieldset>
    </form>`
    )

    return answerSelection;
}

function generateScoreLine() {
    let scoreLine = $(`<div class="score">${score} points</div>`);
    return scoreLine;
}

// when startButton is clicked, first question will fill area
function startQuizButton() {
    $('.js-startButton').on('click', function(event) {
        startQuiz();
    });
}

// fill up the question page
function startQuiz() {
    $('.js-mainContent').html(generateProgress());
    $('.js-mainContent').append(generateQuestion());
    $('.js-mainContent').append(generateAnswerForm());
    $('.js-mainContent').append(submitButton);
    $('.js-mainContent').append(generateScoreLine());
}

// when answer is submitted, check the answer
function submitButtonClicked() {
    submitButton.on('click', function(event) {
        event.preventDefault();
        console.log('submit button listened');
        let answerChoice = $('input:checked').val();
        console.log('answer chosen: ' + answerChoice);
        correctAnswer = `${questions[questionNumber].correctAnswer}`;
        checkAnswer(answerChoice);
        nextQuestionButton();
    });
}

// if answer is correct, give correctFeeback page; if not, incorrectFeeback page
 function checkAnswer(answerChoice) {
     if (answerChoice === correctAnswer) {
         score++;
         $('.js-mainContent').html(generateProgress());
         $('.js-mainContent').append(generateCorrectFeedback());
         $('.js-mainContent').append(nextQuestion);
         $('.js-mainContent').append(generateScoreLine());
    }
    else {
        $('.js-mainContent').html(generateProgress());
        $('.js-mainContent').append(generateIncorrectFeedback());
        $('.js-mainContent').append(nextQuestion);
        $('.js-mainContent').append(generateScoreLine());
    }
 }

 // generate correctFeeback page
function generateCorrectFeedback() {
    let correctFeedback = $(
    `<div>Correct!</div>
    <div id='correctImg'>
        <img src='http://www.mugglenet.com/wp-content/uploads/2016/11/Harry-Prisoner-of-Azkaban.jpg' alt='harryOnBuckbeak'>
    </div>
    <h1>${questions[questionNumber].question}</h1>
    <div id='corrrectStatement'>The answer is ${questions[questionNumber].correctAnswer}</div>`
    );

    return correctFeedback;
}

// generate incorrectFeedback page
function generateIncorrectFeedback() {
    let incorrectFeedback = $(
    `<div>Incorrect</div>
    <div id='incorrectImg'>
        <img src='https://vignette.wikia.nocookie.net/harrypotter/images/e/ed/Tea_leaves_1.jpg' alt='grimTeaLeaves'>
    </div>
    <h1>${questions[questionNumber].question}</h1>
    <div id='correctStatement'>The answer is ${questions[questionNumber].correctAnswer}</div>`
    );

    return incorrectFeedback;
}

// when nextQuestionButton is clicked, show next question or the results/ending page
function nextQuestionButton() {
    nextQuestion.on('click', function(event) {
        questionNumber++;
        if (questionNumber < 10) {
            startQuiz();
            submitButtonClicked();
        }
        else {
            $('.js-mainContent').html(generateEnding());
            $('.js-mainContent').append(restartButton);
            restartQuizButton();
        }
    });
}

// generate ending page
function generateEnding() {
    return `<h1>Congratulations! You Finished!</h1>
    <div>Your Score is ${score}</div>`
}

// when restartQuizButton is clicked, reset question number and score, and show first question
function restartQuizButton() {
    $('.js-restartButton').on('click', function(event) {
        console.log('restart button clicked');
        questionNumber = 0;
        score = 0;
        startQuiz();
        submitButtonClicked();
    });
}

// run all necessary functions
function runQuiz() {
    startQuizButton();
    submitButtonClicked();
}

// when doc is ready run
$(runQuiz);