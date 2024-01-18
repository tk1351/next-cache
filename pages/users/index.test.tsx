import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Users from "./index";
import { USERS } from "./fixture";

describe("Page", () => {
  it("render", () => {
    render(<Users users={USERS} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
