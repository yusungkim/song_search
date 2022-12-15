<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />
<main
	class="w-full min-h-screen bg-gradient-to-r
   from-yellow-600 via-pink-500 to-purple-500 px-10 md:px-20 lg:px-52 py-20"
>
	<slot />
</main>
