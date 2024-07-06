<script>
    import { onMount } from 'svelte';
    let quizzes = [];
  
    onMount(async () => {
      const res = await fetch('/api/quizzes');
      quizzes = await res.json();
    });
  </script>
  
  <h1>Select a Quiz</h1>
  {#each quizzes as quiz}
    <div>
      <a href={`/quiz/${quiz.id}`}>{quiz.title}</a>
    </div>
  {/each}

  
  