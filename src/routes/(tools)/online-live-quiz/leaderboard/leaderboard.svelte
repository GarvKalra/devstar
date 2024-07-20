<script>
    import { onMount } from 'svelte';
    let leaderboard = [];
  
    onMount(async () => {
      const res = await fetch('/api/leaderboard');
      leaderboard = await res.json();
    });
  </script>
  
  <h1>Leaderboard</h1>
  {#each leaderboard as entry}
    <div>
      <p>{entry.email}: {entry.score}</p>
    </div>
  {/each}
  