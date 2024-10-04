<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main aria-label="content">
	<Header />
	<slot />
	<Footer />
</main>
