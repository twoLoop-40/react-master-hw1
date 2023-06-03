import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Container = tw.div`
	hover:cursor-pointer flex flex-1 flex-col px-8 pt-6 bg-gray-700 rounded-lg shadow-2xl text-gray-50 hover:text-gray-900 hover:bg-gray-50 hover:shadow-xl transition duration-200 ease-in-out
`;

const Avatar = tw.img`
	mx-auto h-36 w-36 shrink-0 rounded-full
`;

const Name = tw.h2`
  font-Allura	mt-6 text-3xl font-medium 
`;

interface CardProps {
  id: string;
  name: string;
  imageUrl: string;
}
function Card({ id, name, imageUrl }: CardProps) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`characters/${id}`)}>
      <Avatar src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
}

export default Card;
