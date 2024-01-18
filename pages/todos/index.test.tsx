import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Todos from "./index";
import { TODOS } from "./fixture";

describe("Page", () => {
  it("render", () => {
    render(<Todos todos={TODOS} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
