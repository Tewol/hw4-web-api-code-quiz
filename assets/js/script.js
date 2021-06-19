
  // Variables
  
  //var quizContainer = document.getElementById('.quiz');
  //var startQuizButton = document.getElementById('.start-quiz');
  //var timerEl = document.getElementById('.timer');

  var question = document.getElementById("quiz");
  var answers = document.getElementById("1");


  var quizContainer = document.querySelector('.quiz');
  var startQuizButton = document.querySelector('.start-quiz');
  var timerEl = document.querySelector('.timer');

  var timer;
  var timerCount;
  var isGameOver = false;
  var questionIndex = 0;

  // variable to store output
  var output = [];


  //variable and array of objest 
  var quizChallegne = [
      {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
      },
      {
        question: "The condition in an if/else statment is enclosed within ____?",
        answers: ["quotes", "currly brackets", "Parentesese", "square brackets"],
        correctAnswer: "currly brackets"
      },
      {
        question: "Arrays in JavaScript can be used to store _____?",
        answers: ["number and strings", "Other Arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
      },
      {
        question: "String values must be enclosed within _____ when being assigned to variables",
        answers: ["Commas", "Curly brackets", "Quotes", "Periods"],
        correctAnswer: "Quotes"
      },
      {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: ["JavaScript", "Terminal / bash", "for loops", "Console.log"],
        correctAnswer: "Console.log"
      }
    ];


    
  
  
  //Start quize function called when the start quize button is clicked
  function startQuiz(){
    timerCount = 30;
    startQuizButton.disabled = true;

    //First queston display
    displayQuiz();

    //Timer starts to count down
    startTimer();
    
  }
   
  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      
      if (timerCount >= 0) {

        // Tests if all questions has been answered and time didn't run out
        //if ("finish all questions" && timerCount > 0) {
          // Clears interval and stops timer
          //allDone();
        //}
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        //allDone();
      }
    }, 1000);
  }

  function displayQuiz(){
    //get current index from the array
    var currentQuestion = 0;
    var current = quizChallegne [currentQuestion];

    //Display the question itself
    question.innerHTML = current.question;
    //answers.innerHTML = current.answers;

    console.log (quizChallegne[0]);

     
      
      //Iterate over the array of answers, and with each answers
        //create button
        //display the text of answer
        //create a custom attribute that says wheter anwe is correct or not
  }

  function isAnswerCorrect(){
    // get custome attribute of the button was clicked and determine if answer is correct

  }

  function correctAnswer(){
    questionIndex++;
    displayQuiz();
  }

  function wrongAnswer(){
    questionIndex++;
    displayQuiz();
  }


  // Event listener for the start button to call startQuiz function on click
  startQuizButton.addEventListener("click", startQuiz);
