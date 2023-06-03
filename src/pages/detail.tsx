import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getCharacter, { CharacterDetail, Result } from "../apis/characters";

function Detail() {
  const { id } = useParams();
  const { isLoading, data: characterDetail } = useQuery<
    Result<CharacterDetail>
  >([id], () => getCharacter<CharacterDetail>(id));

  return <div>Detail</div>;
}

export default Detail;
