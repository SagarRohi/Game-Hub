import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: genres,
    staleTime: 24 * 60 * 60 * 1000, //24h,
  });
export default useGenres;

// queryKey: ["genres"],
// queryFn: apiClient.getAll,
