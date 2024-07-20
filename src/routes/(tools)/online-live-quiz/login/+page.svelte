<script>
  import { onMount } from 'svelte';
  import QuizSelect from '../quiz-select/+page.svelte';

  let loginSuccessful = false;
  let loginError = false;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('/online-live-quiz/login', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log("response is ok");
      const result = await response.json();
      console.log('Login Result:', result);
      console.log(result.success);
      try {
          const data = JSON.parse(result.data);
          if (data[1] === 200) {
            console.log("Login successful, status is 200");
            loginSuccessful = true;
            loginError = false;
             
          } else {
            console.log("Invalid login, status is not 200");
            loginError = true;
            loginSuccessful = false;
          }
        } catch (error) {
          console.error('Error parsing response data:', error);
          loginError = true;
          loginSuccessful = false;
        }
    } else {
      console.log("response isnt ok");
      loginError = true;
      loginSuccessful = false;
    }
  }
</script>

{#if loginSuccessful}
  <svelte:component this={QuizSelect} />
{:else}
  <h1>Login</h1>
  <form on:submit={handleSubmit}>
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  {#if loginError}
    <p>Invalid login</p>
  {/if}
{/if}
