<script>
	import SongCard from "$lib/SongCard.svelte";

  export let data;

  const { song } = data;

  console.log(song);
</script>

<section>
  <SongCard {song} />
</section>