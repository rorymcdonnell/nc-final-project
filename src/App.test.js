import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShallowRenderer from 'react-test-renderer/shallow'
import App from "./App";
import NavBar from "./components/NavigationBar"
import GroupPage from "./components/GroupPage"
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";

// test("renders learn react link", () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   screen.getByText();
// });

test('Test navigation bar', () => {
const renderer = new ShallowRenderer();
renderer.render(<GroupPage/>)
const result = renderer.getRenderOutput();

expect(result.type).toBe('div')


})
