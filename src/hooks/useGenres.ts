import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id:number;
    name:string
}

interface FetchGenreResponse{
    count:number;
    results:Genre[]
}

const useGenres=()=> {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error,setError]=useState<AxiosError>();
    const [isLoading,setLoading]=useState(false);
  
    useEffect(() => {
      const controller=new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenreResponse>("/genres")
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err ) =>{
          setError(err)
          setLoading(false);
        });
  
        return ()=>controller.abort();
    }, []);
    return {genres,error,isLoading};
}

export default useGenres