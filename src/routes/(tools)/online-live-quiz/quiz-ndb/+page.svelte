<!-- Quiz.svelte -->
<script>
    import { quiz } from '../quiz-ndb/quizData';
    console.log("the quiz ndb page is running")
    
    let currentQuestionIndex = 0;
    let score = 0;
    let showScore = false;
  
    function handleAnswer(option) {
      if (option.isCorrect) {
        score += 1;
      }
      if (currentQuestionIndex < quiz.length - 1) {
        currentQuestionIndex += 1;
      } else {
        showScore = true;
      }
    }
  
    function restartQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      showScore = false;
    }
  </script>
  
  <main>
    Hello WORLD
    {#if quiz && quiz.length > 0}
      {#if showScore}
        <div class="score-section">
          You scored {score} out of {quiz.length}
          <button on:click={restartQuiz}>Restart Quiz</button>
        </div>
      {:else}
        <div class="question-section">
          <div class="question-count">
            <span>Question {currentQuestionIndex + 1}</span>/{quiz.length}
          </div>
          <div class="question-text">{quiz[currentQuestionIndex].question}</div>
        </div>
        <div class="answer-section">
          {#each quiz[currentQuestionIndex].options as option}
            <button on:click={() => handleAnswer(option)}>{option.text}</button>
          {/each}
        </div>
      {/if}
    {:else}
      <p>Loading quiz...</p>
    {/if}
  </main>
  
  <style>
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
  
    .question-section, .answer-section {
      margin-bottom: 20px;
    }
  
    .question-count {
      margin-bottom: 10px;
    }
  
    .question-text {
      margin-bottom: 20px;
      font-size: 24px;
    }
  
    .answer-section button {
      margin: 5px;
      padding: 10px 20px;
      font-size: 18px;
    }
  
    .score-section {
      text-align: center;
    }
  
    .score-section button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 18px;
    }
  </style>
  