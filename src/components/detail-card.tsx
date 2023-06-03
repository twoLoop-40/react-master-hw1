import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { CharacterDetail } from "../apis/characters";

const Container = tw.div`
	flex flex-1 flex-col px-8 p-6 bg-gray-800 rounded-lg shadow-2xl
`;

const Avatar = tw.img`
	mx-auto h-48 w-48 shrink-0 rounded-full
`;

const Name = tw.h2`
  font-Allura	mt-6 text-4xl font-medium text-gray-50
`;

const Film = tw.span`
	font-Allura	mt-6 text-3xl font-medium bg-gray-100 text-gray-900 rounded-lg px-2
`;

const FilmContainer = tw.div`
	flex flex-col w-96 items-center justify-center  bg-gray-800 mb-0
`;

function DetailCard({ films, name, imageUrl, id, sourceUrl }: CharacterDetail) {
  const navigate = useNavigate();
  return (
    <Container>
      <Avatar src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <FilmContainer>
        {films.map((film) => (
          <Film>{film}</Film>
        ))}
      </FilmContainer>
    </Container>
  );
}

export default DetailCard;
