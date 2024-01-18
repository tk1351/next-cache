import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Comments from "./index";
import { COMMENTS } from "./fixture";

describe("Pages", () => {
  it("render", () => {
    render(<Comments comments={COMMENTS} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
