import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'go there',
		adresse:'Keur-Massar',
	}
});
export default app;