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
  const [isLoading,setLoading]=useState(false);

  useEffect(() => {
    const controller=new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err ) =>{
        setError(err)
        setLoading(false);
      });

      return ()=>controller.abort();
  }, []);
  return {games,setGames,error,isLoading};
}
export default useGames;