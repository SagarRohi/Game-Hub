import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading, hasNextPage, isFetching, fetchNextPage } =
    useGames(gameQuery);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5} marginLeft={2}>
          {isFetching ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
}

export default GameGrid;
