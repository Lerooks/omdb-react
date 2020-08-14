import React, { ReactElement, useState, useEffect, MouseEvent } from "react";
import { MoviePoster } from "types/movies";
import BaseLayout from "components/layouts/base-layout";
import Search from "./search";
import omdb from "services/api/omdb";
import { useParams } from "react-router-dom";

export default function SearchContainer(): ReactElement {
  const { term } = useParams();
  const [movies, setMovies] = useState<Array<MoviePoster>>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const fetchMovies = async () => {
    try {
      const data = await omdb.searchMovies({ s: term });

      setPage(page + 1);
      setMovies(data.Search ?? []);
      setTotalResults(data.totalResults);
    } catch (error) {
      setMovies([]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreMovies = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      const data = await omdb.searchMovies({ s: term, page });

      setPage(page + 1);
      setMovies([...movies, ...(data.Search ?? [])]);
    } catch (error) {
      setMovies([]);
      console.error(error);
    }
  };

  useEffect(() => {
    setPage(1);
    setLoading(true);
    fetchMovies();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <BaseLayout>
      <Search
        page={page}
        loading={loading}
        movies={movies}
        totalResults={totalResults}
        loadMoreMovies={loadMoreMovies}
      ></Search>
    </BaseLayout>
  );
}
