import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Page", () => {
  it("render", () => {
    render(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
