import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/App";
import { ThemeProvider } from "../../context/ThemeProvider";

describe("App", () => {
  it("renders App correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
