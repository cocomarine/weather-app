import React from "react";
import { render } from "@testing-library/react";
import ToggleTheme from "../../components/ToggleTheme";
import { ThemeProvider } from "../../context/ThemeProvider";

describe("ToggleTheme", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
