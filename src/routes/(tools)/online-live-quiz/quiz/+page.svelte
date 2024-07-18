<script>
    import { onMount } from 'svelte';
    export let params;
    let questions = [];
  
    onMount(async () => {
      const res = await fetch(`/api/quiz/${params.id}/questions`);
      questions = await res.json();
    });
  </script>
  
  <h1>Quiz Questions</h1>
  {#each questions as question}
    <div>
      <p>{question.question}</p>
      <input type="text" placeholder="Your Answer" />
    </div>
  {/each}
  <button>Submit</button>
  