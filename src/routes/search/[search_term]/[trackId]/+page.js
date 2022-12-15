/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const trackId = params.trackId
  const res = await fetch(`https://itunes.apple.com/lookup?id=${trackId}`)
  const data = await res.json()

  return {
    song: data.results[0]
  }
}