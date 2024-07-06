<script>
    import { onMount } from 'svelte';
    let score = 0;
  
    onMount(async () => {
      const res = await fetch('/api/score');
      score = await res.json();
    });
  </script>
  
  <h1>Your Score: {score}</h1>
  <a href="/leaderboard">Leaderboard</a>
  