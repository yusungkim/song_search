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

	let searchInputs = '';
  $: searchTerm = searchInputs.trim().split(' ').join('+');

	const search = () => {
		if (searchTerm.length > 0) {
      
			goto(`/search/${searchTerm}`);
		}
	};
</script>

<section class="w-full">
	<h1 class="text-6xl">Search songs..</h1>
	<div class="w-full pt-8 flex flex-col gap-1">
		<div class="w-full relative">
			<input class="p-2 text-xl rounded-sm w-full" type="text" bind:value={searchInputs} placeholder="Please input search term." />
			<button class="absolute my-auto top-1 bottom-1 right-1 rounded-sm px-5 bg-slate-300 hover:bg-slate-400 hover:text-slate-50" on:click={search}>Search</button>
		</div>
	</div>
</section>
