<script>
	export let name;
	export let desc; 
	import LogoImg from './component/LogoImg.svelte';
</script>

<main> 
	<LogoImg/>
	<h1>Hello {name}!</h1>
	<h2>{desc}</h2>
	<p>Visit the <a target="_blank" href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main> 
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>