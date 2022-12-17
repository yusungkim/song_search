<script>
	import { Icon, Play, Pause } from "svelte-hero-icons";

	export let song = {
		trackName: 'trackName',
		artistName: 'artistName',
		artworkUrl100: 'artworkUrl100',
		trackViewUrl: 'trackViewUrl',
		artistViewUrl: 'artistViewUrl',
		previewUrl: 'previewUrl',
		trackId: 'trackId',
	};
	export let allowedToPlay = 'NO'

	/**
	 * @type {HTMLAudioElement}
	 */
	let player;
	let playing = false;
	let showControl = false;	

	$: if (allowedToPlay == song.trackId) {
		showControl = true;
		playing ? player?.play() : player?.pause();
	} else {
		showControl = false;
		playing = false;
		player?.pause();
	}

	const playOrPause = () => {
		showControl = true;
		playing = !playing
		allowedToPlay = song.trackId;
	}

	const onMouseLeave = () => {
		if (allowedToPlay != song.trackId) {
			showControl = false
		}
	}

	// $: console.log(song.trackName, "showControl: ", showControl, "playing: ", playing)

</script>

<div class="flex gap-2 rounded-md bg-opacity-40 p-3 bg-red-400 hover:bg-red-[500] hover:bg-opacity-80 min-w-min hover:scale-105 transition duration-100 ease-in-out">
	<button on:click={playOrPause} on:mouseenter={() => showControl = true} on:mouseleave={onMouseLeave}
		><div class="relative">
			<img src={song.artworkUrl100} alt={song.trackName} />
			{#if showControl}
			<Icon src="{playing ? Pause : Play}" class="absolute m-auto top-5 bottom-5 right-5 left-5 rounded-sm text-slate-100 text-opacity-90 w-12 h-12" />
			{/if}
		</div></button
	>
	<div class="flex flex-col gap-1 justify-start items-start">
		<a class="hover:bg-yellow-100 hover:bg-opacity-50 px-2 rounded-md text-sm" href={song.artistViewUrl} target="_blank" rel="noopener noreferrer">{song.artistName}</a>
		<a class="hover:bg-yellow-100 hover:bg-opacity-50 px-2 rounded-md text-lg text-start" href={song.trackViewUrl} target="_blank" rel="noopener noreferrer">{song.trackName}</a>
		<audio class="w-3/4 h-10" src={song.previewUrl} bind:this={player}
			><track kind="captions" /></audio
		>
	</div>
</div>
