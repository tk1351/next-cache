import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Albums from "./index";
import { ALBUMS } from "./fixture";

describe("Page", () => {
  it("render", () => {
    render(<Albums albums={ALBUMS} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
