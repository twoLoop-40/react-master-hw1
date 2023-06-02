type CharacterOverAll = {
  id: number;
  name: string;
  imageUrl: string;
};

type CharacterDetail = CharacterOverAll & {
  films: string[];
  sourceUrl: string;
};

async function getCharacter<T extends CharacterOverAll | CharacterDetail>(
  id?: number,
  result?: T
) {
  const apiAddress = "https://disney_api.nomadcoders.workers.dev/characters";
  const fetcher = async (id?: number) => {
    try {
      const responseData = id
        ? fetch(`${apiAddress}/${id}`)
        : fetch(apiAddress);
      const result = await responseData.then((response) => response.json());
      return getCharacter<T>(id, result);
    } catch (err) {
      console.log(err);
      return { ok: false };
    }
  };
  if (result) {
    return { ok: true, result };
  }

  fetcher(id);
}

export default getCharacter;
