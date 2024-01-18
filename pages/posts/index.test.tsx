import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Posts from "./index";
import { POSTS } from "./fixture";

describe("Page", () => {
  it("render", () => {
    render(<Posts posts={POSTS} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
