import { render, screen } from "@testing-library/react";
import App from "../App.js";
import LandingPage from "../components/LandingPage";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a button create group", () => {
  render(<App />);
  const textElement = screen.getByText(/Create Group/i);
  expect(textElement).toBeInTheDocument();
});

test("renders a button join group", () => {
  render(<App />);
  const textElement = screen.getByText(/Join a Group/i);
  expect(textElement).toBeInTheDocument();
});

test("click", () => {
  render(<LandingPage />);

  userEvent.click(screen.getByText("Check"));
  expect(screen.getByLabelText("Check")).toBeChecked();
});
