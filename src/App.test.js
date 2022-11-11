import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button with blue color can be click to change color to red", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveStyle("background-color:blue");
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle("background-color:red");
});

test("check checkbox will disable button", () => {
  render(<App></App>);
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable Button",
  });
  expect(checkboxElement).toBeInTheDocument();
  fireEvent.click(checkboxElement);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});
