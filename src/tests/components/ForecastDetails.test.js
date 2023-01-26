import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    forecast: {
      date: 1525046400000,
      temperature: {
        min: 4,
        max: 11,
      },
      humidity: 30,
      wind: {
        speed: 13,
        direction: "s",
      },
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails forecast={validProps.forecast} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
