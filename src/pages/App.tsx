import { Outlet } from "react-router-dom";
import tw from "twin.macro";

const Container = tw.div`
  flex flex-col items-center justify-center  bg-gray-900 mb-0 min-h-screen
`;

export default function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
