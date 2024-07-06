<script>
  import { onMount } from 'svelte';
  import login from '../login/+page.svelte';

  let registrationComplete = false;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('/online-live-quiz/register', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      registrationComplete = true;
    } else {
      console.error('Registration failed');
    }
  }
</script>

{#if registrationComplete}
  <svelte:component this={login} />
{:else}
  <h1>Register</h1>
  <form on:submit={handleSubmit}>
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Register</button>
  </form>
{/if}
