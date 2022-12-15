<script>
	import {
		afterNavigate,
		beforeNavigate,
		disableScrollHandling,
		goto,
		invalidate,
		invalidateAll,
		preloadCode,
		preloadData
	} from '$app/navigation';

	let searchTerm = '';
  $: errorMessage = searchTerm.length === 0 ? "Please input search term." : ''

	const search = () => {
    if (searchTerm.length > 0) {
      goto(`/search/${searchTerm}`);
    }
	};
</script>

<section>
	<h1>Search songs..</h1>
	<input type="text" bind:value={searchTerm} placeholder="search term"/>
	<button on:click={search}>Search</button>
	<p>{errorMessage}</p>
</section>
