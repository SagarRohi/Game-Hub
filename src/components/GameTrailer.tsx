import React from "react";
import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  if (!first) return null;
  return <video src={first.data.max} poster={first.preview} controls></video>;
}

export default GameTrailer;
