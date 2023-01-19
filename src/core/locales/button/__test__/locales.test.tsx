import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "../../../../core/locales/i18n";
import LanguageButton from "..";

describe("Language", () => {
  it("Default localStorage", () => {
    render(<LanguageButton />);
    const lang = localStorage.getItem("i18nextLng");

    expect(lang).toBe(
      import.meta.env.VITE_DEFAULT_LANGUAGE === "en" ? "en-US" : "fa"
    );
  });

  it("Default Value", () => {
    render(<LanguageButton />);
    const combo: any = screen.getByRole("button");

    expect(combo).toHaveTextContent(import.meta.env.VITE_DEFAULT_LANGUAGE);
  });

  it("After Click", async () => {
    render(<LanguageButton />);
    const combo: any = screen.getByRole("button");
    await userEvent.click(combo);

    const selectedItem = screen.getByText(/fa/i);
    await userEvent.click(selectedItem);

    let lang = localStorage.getItem("i18nextLng");
    expect(lang).toBe("fa");
  });
});
