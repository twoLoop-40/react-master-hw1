import { useQuery } from "@tanstack/react-query";
import getCharacter, { CharacterOverAll, Result } from "../apis/characters";

function AllCharacters() {
  const { isLoading, data: characters } = useQuery<Result<CharacterOverAll>>(
    ["allCharacters"],
    () => getCharacter<CharacterOverAll>()
  );

  return <div>all characters</div>;
}

export default AllCharacters;
