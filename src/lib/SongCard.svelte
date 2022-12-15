<script>
	import { onMount } from 'svelte';
	import { query_selector_all } from 'svelte/internal';

	export let song = {
		trackName: 'trackName',
		artistName: 'artistName',
		artworkUrl100: 'artworkUrl100',
		trackViewUrl: 'trackViewUrl',
		artistViewUrl: 'artistViewUrl',
		previewUrl: 'previewUrl'
	};

	let player;
	let play = false;

	const pauseOrPlay = () => {
		play = !play;
		if(play) {
      player?.play();
    } else {
      player?.pause();
    }
	};

</script>

<div class="flex gap-2 rounded-md bg-opacity-40 p-3 bg-red-400 min-w-min ">
	<button class="hover:scale-105 transition duration-100 ease-in-out" on:click={pauseOrPlay}
		><img src={song.artworkUrl100} alt={song.trackName} /></button
	>
	<div class="flex flex-col gap-1 justify-start items-start">
		<a class="hover:bg-yellow-100 hover:bg-opacity-50 px-2 rounded-md text-sm" href={song.artistViewUrl}>{song.artistName}</a>
		<a class="hover:bg-yellow-100 hover:bg-opacity-50 px-2 rounded-md text-lg text-start" href={song.trackViewUrl}>{song.trackName}</a>
		<audio class="w-3/4 h-10" src={song.previewUrl} bind:this={player}
			><track kind="captions" /></audio
		>
	</div>
</div>
