import React, { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const theme = {
  colors: {
    black: "#0F1115",
    lightBlack: "#19181F",
    lighterBlack: "#222128",
    white: "#f5f5f5",
    yellow: "#ffb10a",
  },
};

export default function Theme({ children }: Props): ReactElement {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
