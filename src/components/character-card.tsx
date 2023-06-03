import tw from "twin.macro";

const Container = tw.div`
	flex flex-1 flex-col p-8 bg-gray-700 rounded-lg shadow-2xl text-gray-50 hover:text-gray-900 hover:bg-gray-50 hover:shadow-xl transition duration-200 ease-in-out
`;

const Avatar = tw.img`
	mx-auto h-32 w-32 shrink-0 rounded-full
`;

const Name = tw.h2`
	mt-6 text-xl font-medium 
`;

interface CardPorps {
  name: string;
  imageUrl: string;
}
function Card({ name, imageUrl }: CardPorps) {
  return (
    <Container>
      <Avatar src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
}

export default Card;
