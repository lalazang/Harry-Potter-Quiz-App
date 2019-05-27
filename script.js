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
]

let questionNumber = 0;
let score = 0;

// generate QnA html (unfinished)
function generateQnA() {
    return `<div class="score">${score} points</div>
    <h1 class="question">${questions[questionNumber].question}</h1>

    <form>
      <fieldset class="answers">
        <legend>Question ${questionNumber + 1}</legend>
          <div class="wholeAnswer">
            <input class="choice answerA" type="radio" name="answer" id="A" value='${questions[questionNumber].answers[0]}' required>
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
    </form>
    
    <button onclick="window.location.href = 'feedback.html';">Submit</button>
    <!-- <button type='submit class='submit js-submit'>Submit</button> -->
    
    <div class="progress">Question ${questionNumber + 1} of 10</div>`
}

function startQuizButton() {
    $('.js-startButton').on('click', function(event) {
        $('.js-mainContent').html(generateQnA());
    });
}

function submitAnswerButton() {
    $('.js-submit').on('click', function(event) {
        event.preventDefault();
        let answerChoice = $('input:checked').val();
        let correctAnswer = `${questions[questionNumber].correctAnswer}`;


    });
}

function correctFeedback() {
    $('.js-mainContent').html()

    score++;

}

function incorrectFeedback() {

}

 function checkAnswer() {
     if (answerChoice === correctAnswer) {

     }
 }

function runQuiz() {

    startQuizButton();
    // submitAnswerButton();


}

runQuiz();

// to do:
//  - write function stubs + psuedo code
//  - what are the function stubs necessary?
//  - narrow down function stubs
//  - fill out function generatQnA with the actual content

// a radio answer must be required to submit
// check to see if answer is correct
// give feedback for incorrect
// give feedback for correct and increment score
// increment question number on next question button on either feedback page
// when question number reaches 10 or increments to 11, then show results page

// backpacking

// 2-increment question number
// 3-increment score
// render question in DOM
// 4-user selects answer on submit run user feedback
// two functions for correct and incorrect answer
// two functions that may be executed in either case (user feedback for correct/incorrect answer)
// update score text
// 7-render results - when quiz is over this is the html for the page
// 5-Next button - what happens when the user clicks next
// 6-restart quiz function - reloads page to start quiz over
// run quiz functions

// Drag queen

// 4-Submit button
// 5-Next question button
// 6-Restart quiz button
// What the next question button will do
// Check answer
// Generate feedback if correct
// Generate feedback if incorrect
// 2-iterate/increment question
// 3-iterate/increment score
// 7-Create results page
// Handle buttons

