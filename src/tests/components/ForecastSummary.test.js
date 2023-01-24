import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 4,
      max: 11,
    },
    onSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(getByText("Mon Apr 30")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("11°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
  });

  it("when the button is clicked, onSelect is called", () => {
    const { getByRole } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onSelect).toHaveBeenCalled();
  });
});
