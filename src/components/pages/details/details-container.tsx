import React, { ReactElement, useState, useEffect } from "react";
import BaseLayout from "components/layouts/base-layout";
import { useParams } from "react-router-dom";
import { MovieDetails } from "types/movies";
import Details from "./details";
import omdb from "services/api/omdb";

export default function DetailsContainer(): ReactElement {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDetails>();

  const fetchMovie = async () => {
    try {
      const data = await omdb.findMovieById({ i: imdbID });

      setMovie(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout>
      <Details loading={loading} {...movie}></Details>
    </BaseLayout>
  );
}
