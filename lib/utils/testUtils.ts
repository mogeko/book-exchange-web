import { render, RenderOptions } from "@testing-library/react";
import { WrapProvider } from "@/pages/_app";

function renderWithProvider(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: WrapProvider, ...options });
}

export * from "@testing-library/react";
export { renderWithProvider as render };
