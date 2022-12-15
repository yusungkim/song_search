<script>
  export let data;

  const { song } = data;

  console.log(song);
</script>

<section>
  <h1>{song.trackName}</h1>
  <div>
    <img src={song.artworkUrl100} alt={song.trackName}/>
    <div>
    <a href={song.artistViewUrl}>{song.artistName}</a>
    <a href={song.trackViewUrl}>{song.trackName}</a>
  </div>
    <audio controls src="{song.previewUrl}" />
  </div>
</section>