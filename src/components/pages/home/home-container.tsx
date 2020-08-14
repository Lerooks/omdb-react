import React, { ReactElement, ChangeEvent, FormEvent, useState } from "react";
import history from "services/history";
import Home from "./home";

export default function HomeContainer(): ReactElement {
  const [term, setTerm] = useState("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setTerm(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (isAbleToSubmit) {
      history.push(`/search/${term}`);
    }
  };

  const isAbleToSubmit = term.length >= 3;

  return (
    <Home
      term={term}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isAbleToSubmit={isAbleToSubmit}
    ></Home>
  );
}
