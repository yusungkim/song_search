<script>
  import { goto } from '$app/navigation'
	import SongCard from '$lib/SongCard.svelte';
  export let data;
  const {searchTerm, songs} = data;

  let allowedToPlayTrackId = 'NoSongsInitiallyPlaying';
  
  $: console.log("allowedToPlayTrackId: ", allowedToPlayTrackId);
</script>

<h1 class="text-4xl pb-3">Results</h1>
<section>
  <div class="grid grid-cols-2 2xl:grid-cols-3 gap-3">
  {#each songs as song (song.trackId) }
    <button on:click|self={()=>goto(`/search/${searchTerm}/${song.trackId}`)}>
      <SongCard {song} bind:allowedToPlay={allowedToPlayTrackId}/>
    </button>
    <!-- <a href={`/search/${searchTerm}/${song.trackId}`} >
      <SongCard {song} bind:allowedToPlay={allowedToPlayTrackId}/>
    </a> -->
  {/each}
</div>
</section>