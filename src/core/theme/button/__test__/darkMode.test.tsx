import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import DarkMode from "../darkMode";

describe("DarkMode", () => {
  it("Default Value", () => {
    render(<DarkMode />);
    let theme = localStorage.getItem("background");

    expect(theme).toBe(import.meta.env.VITE_DEFAULT_MODE);
  });

  it("After Click", () => {
    const DefaultMode = import.meta.env.VITE_DEFAULT_MODE;
    const { container }: any = render(<DarkMode />);
    const btn: any = container.querySelector("button");

    fireEvent.click(btn);

    let theme = localStorage.getItem("background");

    expect(theme).toBe(DefaultMode === "dark" ? "light" : "dark");
  });
});
