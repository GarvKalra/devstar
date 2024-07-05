<script>
    import { onMount } from 'svelte';
  </script>
  
  <h1>Register</h1>
  <form method="post">
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Register</button>
  </form>
  