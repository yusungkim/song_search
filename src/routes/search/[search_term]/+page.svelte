<script>
  import { goto } from '$app/navigation'
  export let data;
  const {searchTerm, songs} = data;
</script>

<section>
  {#each songs as song}
    <button on:click={()=>goto(`/search/${searchTerm}/${song.trackId}`)}>{song.trackName}</button>
  {/each}
</section>