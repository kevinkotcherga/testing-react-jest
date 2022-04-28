import { render, screen } from "@testing-library/react"
import Login from "./Login"

test('usernam input should be rendered', () => {
  render(<Login/>);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
})

test('password input should be rendered', () => {
	render(<Login />);
	const passwordInputEl = screen.getByPlaceholderText(/password/i);
	expect(passwordInputEl).toBeInTheDocument();
});

test('button should be rendered', () => {
	render(<Login />);
	const buttonInputEl = screen.getByRole("button");
	expect(buttonInputEl).toBeInTheDocument();
});

test('usernam input should be empty', () => {
	render(<Login />);
	const userInputEl = screen.getByPlaceholderText(/username/i);
	expect(userInputEl.value).toBe("");
});

test('password input should be empty', () => {
	render(<Login />);
	const userInputEl = screen.getByPlaceholderText(/password/i);
	expect(userInputEl.value).toBe('');
});
