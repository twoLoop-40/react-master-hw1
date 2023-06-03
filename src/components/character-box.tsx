import tw from "twin.macro";
import { CharacterOverAll } from "../apis/characters";
import Card from "./character-card";

const Container = tw.ul`
	grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-900 mr-10
`;

const Item = tw.li`
	col-span-1 flex flex-col rounded-lg bg-white text-center shadow
`;

function CharactersBox({
  characters,
}: {
  characters: CharacterOverAll[] | undefined;
}) {
  return (
    <Container>
      {characters?.map((character) => (
        <Item key={character.name}>
          <Card name={character.name} imageUrl={character.imageUrl} />
        </Item>
      ))}
    </Container>
  );
}

export default CharactersBox;
