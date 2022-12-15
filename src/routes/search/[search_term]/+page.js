/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const searchTerm = params.search_term
  const res = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=song`)
  const data = await res.json()

  return {
    searchTerm,
    songs: data.results
  }
}