import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Pradeep Vishwakarma',
		desc:'Welcome to Svelte new framwork.'
	}
});

export default app;