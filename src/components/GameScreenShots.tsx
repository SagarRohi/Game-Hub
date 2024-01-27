import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
function GameScreenShots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image src={file.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenShots;