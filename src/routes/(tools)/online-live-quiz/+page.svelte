<script>

import Quizes from "./quizes/+page.svelte";

	const tools = [
	  { name: "GIF Tool 1", component: Quizes },
	];
	let selectedTool = null;
	import Register from './register/+page.svelte';
	import login from './login/+page.svelte'

    let showRegister = false;
	let showLogin=false;
  function loadRegister() {
    showRegister = true;
  }
  function loadLogin() {
    showLogin = true;
  }
</script>

{#if !showRegister && !showLogin}
<div class="card gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 overflow-hidden rounded-lg">
	<button on:click={loadRegister}> Register </button>
	<button on:click={loadLogin}> Login </button>
	{#if selectedTool === null}
    <div class="grid grid-cols-4 gap-8 p-4">
      {#each tools as tool}
        <button on:click={() => selectedTool = tool.component} class="homebutton bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg">
          {tool.name}
        </button>
      {/each}
    </div>
  {:else}
    <div>
		

      <svelte:component this={selectedTool}/>
	  <button on:click={() => selectedTool = null} class="backbutton bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-lg mb-4">
        Back to Tools
      </button>
    </div>
  {/if}
</div>
{/if}
{#if showRegister}
	<svelte:component this={Register} />
{/if}
{#if showLogin}
	<svelte:component this={login} />
{/if}
<style>
.card {
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	margin: 20px;
	margin-top: 20px;
}
.grid {
	width: 100%;
}
.homebutton {
	border-radius: 15px;
}
.backbutton {
	border-radius: 15px;
}
</style>