import React, { ReactElement, useState, ChangeEvent, FormEvent } from "react";
import history from "services/history";
import Header from "./header";

export default function HeaderContainer(): ReactElement {
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
    <Header
      term={term}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isAbleToSubmit={isAbleToSubmit}
    ></Header>
  );
}
