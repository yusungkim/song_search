<script>
  import { goto } from '$app/navigation'
	import SongCard from '$lib/SongCard.svelte';
  export let data;
  const {searchTerm, songs} = data;
  console.log(songs)
</script>

<h1 class="text-4xl pb-3">Results</h1>
<section>
  <div class="grid grid-cols-2 2xl:grid-cols-3 gap-3">
  {#each songs as song (song.trackId)}
    <button on:click={()=>goto(`/search/${searchTerm}/${song.trackId}`)}>
      <SongCard {song} />
    </button>
  {/each}
</div>
</section>