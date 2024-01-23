import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
  }
const useData=<T>(endPoint:string)=>{
  const [data, setData] = useState<T[]>([]);
  const [error,setError]=useState<AxiosError>();
  const [isLoading,setLoading]=useState(false);

  useEffect(() => {
    const controller=new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err ) =>{
        setError(err)
        setLoading(false);
      });

      return ()=>controller.abort();
  }, []);
  return {data,error,isLoading};
}
export default useData;