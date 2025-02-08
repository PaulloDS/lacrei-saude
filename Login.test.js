import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./app/login/page";

describe("Login Component", () => {
  test("Renderiza corretamente o formulário de login", () => {
    render(<Login />);

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });

  test("Permite preenchimento do formulário e submissão", () => {
    render(<Login />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(loginButton);

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("123456");
  });
});

describe("Social Login Buttons", () => {
  test("Renderiza botões de login social", () => {
    render(<Login />);

    expect(screen.getByTestId("facebook-login")).toBeInTheDocument();
    expect(screen.getByTestId("twitter-login")).toBeInTheDocument();
  });
});
