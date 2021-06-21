import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal tests", () => {
  it("should render", () => {
    expect(render(<Modal />)).toBeTruthy();
  });
});
