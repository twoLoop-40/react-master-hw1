async function makeResult(response?: Response) {
  if (!response) {
    return { ok: false };
  }
  const result = await response.json();
  return result;
}
async function getCharacters() {
  try {
    const response = await fetch(
      "https://disney_api.nomadcoders.workers.dev/characters"
    );
    return makeResult(response);
  } catch (err) {
    console.log(err);
    return makeResult();
  }
}

export default getCharacters;
