export async function fetchArtworks() {
  const response = await fetch("https://api.artic.edu/api/v1/artworks");
  const body = await response.json();
  const artworks = body.data;
  return artworks;
}
