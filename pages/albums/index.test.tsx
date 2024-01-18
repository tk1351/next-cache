import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import useSWRImmutable from "swr/immutable";
import Albums from "./index";
import { ALBUMS } from "./fixture";

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
      render(<Albums />);
      expect(screen.getByRole("list")).toBeInTheDocument();
    });
  });
});
