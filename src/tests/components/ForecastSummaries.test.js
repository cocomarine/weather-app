import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1525046400000,
      description: "Stub description",
      icon: "800",
      temperature: {
        min: 4,
        max: 11,
      },
      onSelect: () => {},
    },
    {
      date: 1525132800000,
      description: "Stub description2",
      icon: "211",
      temperature: {
        min: 8,
        max: 13,
      },
      onSelect: () => {},
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(<ForecastSummaries forecasts={validProps} />);
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
