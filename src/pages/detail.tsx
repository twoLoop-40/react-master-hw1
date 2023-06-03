import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getCharacter, { CharacterDetail, Result } from "../apis/characters";
import tw from "twin.macro";
import Loading from "../components/loading";
import DetailCard from "../components/detail-card";

const Container = tw.div`
  flex flex-col items-center justify-center  bg-gray-900 mb-0
`;

function Detail() {
  const { id } = useParams();
  const { isLoading, data: characterDetail } = useQuery<
    Result<CharacterDetail>
  >([id], () => getCharacter<CharacterDetail>(id));

  return (
    <Container>
      {isLoading || !characterDetail?.result ? (
        <Loading />
      ) : (
        <DetailCard {...characterDetail.result} />
      )}
    </Container>
  );
}

export default Detail;
