import tw from "twin.macro";

const Container = tw.div`
  flex  items-center justify-center h-32 bg-gray-900 mb-0
`;

const Heading = tw.h1`
	text-4xl font-bold text-center text-gray-50
`;

function Header() {
  return (
    <Container>
      <Heading>Disney Characters</Heading>
    </Container>
  );
}

export default Header;
