import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image:string,
    parent_platforms:{platform:Platform}[];
    metacritic:number
  }
interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames=()=>{
  const [games, setGames] = useState<Game[]>([]);
  const [error,setError]=useState<AxiosError>();
  useEffect(() => {
    const controller=new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        console.log(res);
        if(res.data) setGames(res.data.results);
      })
      .catch((err ) => setError(err));

      return ()=>controller.abort();
  }, []);
  return {games,setGames,error};
}
export default useGames;