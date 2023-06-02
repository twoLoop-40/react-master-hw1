type CharacterOverAll = {
  id: number;
  name: string;
  imageUrl: string;
};

type CharacterDetail = CharacterOverAll & {
  films: string[];
  sourceUrl: string;
};

type taggedCharacter<T> = T extends "Detail"
  ? CharacterDetail & { type: T; ok: true }
  : T extends "OverAll"
  ? CharacterOverAll & { type: T; ok: true }
  : { type: T; ok: false };

async function getCharacter(
  id?: number,
  result?: CharacterOverAll | CharacterDetail
) {
  const apiAddress = "https://disney_api.nomadcoders.workers.dev/characters";
  const fetcher = async (id?: number) => {
    try {
      const responseData = id
        ? fetch(`${apiAddress}/${id}`)
        : fetch(apiAddress);
      const result = await responseData.then((response) => response.json());
      return getCharacter(id, result);
    } catch (err) {
      console.log(err);
      return { ok: false, type: "failure" } as taggedCharacter<"failure">;
    }
  };
  if (result) {
    return id
      ? ({ ok: true, type: "Detail", result } as taggedCharacter<"Detail">)
      : ({ ok: true, type: "OverAll", result } as teggedCharacter<"OverAll">);
  }
  fetcher(id);
}

const result = getCharacter(15, { id: 1, name: "이", imageUrl: "url" });

export default getCharacter;
