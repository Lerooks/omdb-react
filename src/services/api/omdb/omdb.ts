import client from "./client";
import {
  SearchParams,
  SearchResponse,
  FindByIdParams,
  FindByIdResponse,
} from "types/api";

async function searchMovies(params: SearchParams): Promise<SearchResponse> {
  const { data }: { data: SearchResponse } = await client.get("/", { params });

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
}

async function findMovieById(
  params: FindByIdParams
): Promise<FindByIdResponse> {
  const { data }: { data: FindByIdResponse } = await client.get("/", {
    params,
  });

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
}

export default {
  searchMovies,
  findMovieById,
};
