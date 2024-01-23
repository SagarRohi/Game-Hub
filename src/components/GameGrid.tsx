import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error, setGames } = useGames();
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
}

export default GameGrid;
