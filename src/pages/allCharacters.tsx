import { useQuery } from "@tanstack/react-query";
import getCharacter, { CharacterOverAll, Result } from "../apis/characters";
import CharactersBox from "../components/character-box";
import Header from "../components/header";
import tw from "twin.macro";
import Loading from "../components/loading";

const Container = tw.div`
  flex flex-col items-center justify-center  bg-gray-900 mb-0 relative
`;
function take<T>(array: T[] | undefined, count: number): T[] {
  return array?.slice(0, count) ?? [];
}
function AllCharacters() {
  const { isLoading, data: characterResult } = useQuery<
    Result<CharacterOverAll[]>
  >(["allCharacters"], () => getCharacter<CharacterOverAll[]>());

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <CharactersBox characters={take(characterResult?.result, 50)} />
      )}
    </Container>
  );
}

export default AllCharacters;
