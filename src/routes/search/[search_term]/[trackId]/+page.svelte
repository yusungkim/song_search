<script>
	import SongCard from "$lib/SongCard.svelte";

  export let data;

  const { song } = data;
  console.log(song)
</script>

<section class="p-5">
  <SongCard {song} />
  <div class="p-5">
    <p class="flex text-lg"><span class="w-48">releaseDate:</span><span>{song.releaseDate}</span></p>
    <p class="flex text-lg"><span class="w-48">trackCensoredName:</span><span>{song.trackCensoredName}</span></p>
    <p class="flex text-lg"><span class="w-48">trackCount:</span><span>{song.trackCount}</span></p>
    <p class="flex text-lg"><span class="w-48">trackName:</span><span>{song.trackName}</span></p>
    <p class="flex text-lg"><span class="w-48">trackNumber:</span><span>{song.trackNumber}</span></p>
    <p class="flex text-lg"><span class="w-48">trackTimeMillis:</span><span>{song.trackTimeMillis}</span></p>
    <p class="flex text-lg"><span class="w-48">trackPrice:</span><span>{song.trackPrice} {song.currency}</span></p>
  </div>
</section>