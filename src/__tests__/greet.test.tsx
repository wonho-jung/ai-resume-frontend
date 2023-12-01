import Greet from "@/components/Greet";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Greets", () => {
  test("Greets render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello, no name");
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested describe", () => {
  test("Greet renders with a name", () => {
    render(<Greet name="test" />);
    const textElement = screen.getByText("Hello, test");
    expect(textElement).toBeInTheDocument();
  });
});
