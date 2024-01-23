import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();
  return genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>);
}

export default GenreList;
