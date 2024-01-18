import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useSWRImmutable from "swr/immutable";
import Home from "./index";
import { USERS } from "./users/fixture";
import { ALBUMS } from "./albums/fixture";

jest.mock("swr/immutable");

describe("Page", () => {
  beforeEach(() => {
    // @ts-ignore
    useSWRImmutable.mockReturnValue({ data: ALBUMS });
  });
  afterEach(() => {
    // @ts-ignore
    useSWRImmutable.mockReset();
  });
  describe("fetch", () => {
    it("render", () => {
      render(<Home users={USERS} />);
      expect(screen.getByTestId("swr-list")).toBeInTheDocument();
    });
  });
});
