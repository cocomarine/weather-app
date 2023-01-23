import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Manchester",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct text", () => {
    const { getByTestId } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(getByTestId("search-input")).toHaveValue("Manchester");
  });

  // it("when search text is typed, setSearchText is called")

  it("when search button is clicked, onSubmit is called", () => {
    const { getByRole } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
