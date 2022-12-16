<script>
	import { Icon, Play, Pause } from "svelte-hero-icons";

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
	let showControl = false;

	const pauseOrPlay = () => {
		play = !play;
		if(play) {
      player?.play();
    } else {
      player?.pause();
    }
	};

</script>

<div class="flex gap-2 rounded-md bg-opacity-40 p-3 bg-red-400 min-w-min hover:scale-105 transition duration-100 ease-in-out">
	<button on:click={pauseOrPlay} on:mouseenter={() => showControl = true} on:mouseleave={() => showControl = false}
		><div class="relative">
			<img src={song.artworkUrl100} alt={song.trackName} />
			{#if showControl || play}
			<Icon src="{play ? Pause : Play}" class="absolute m-auto top-5 bottom-5 right-5 left-5 rounded-sm text-slate-100 text-opacity-90 w-12 h-12" />
			{/if}
		</div></button
	>
	<div class="flex flex-col gap-1 justify-start items-start">
		<a class="hover:bg-yellow-100 hover:bg-opacity-50 px-2 rounded-md text-sm" href={song.artistViewUrl}>{song.artistName}</a>
		<a class="hover:bg-yellow-100 hover:bg-opacity-50 px-2 rounded-md text-lg text-start" href={song.trackViewUrl}>{song.trackName}</a>
		<audio class="w-3/4 h-10" src={song.previewUrl} bind:this={player}
			><track kind="captions" /></audio
		>
	</div>
</div>
