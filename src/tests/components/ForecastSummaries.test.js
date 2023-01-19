import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 111111,
      description: "Stub description",
      icon: "stubIcon",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 222222,
      description: "Stub description2",
      icon: "stubIcon2",
      temperature: {
        min: 11,
        max: 20,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
