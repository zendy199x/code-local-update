import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm, { Props } from "../LoginForm";

function renderLoginForm(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    onPasswordChange() {
      return;
    },
    onRememberChange() {
      return;
    },
    onUsernameChange() {
      return;
    },
    onSubmit() {
      return;
    },
    shouldRemember: true
  };
  return render(<LoginForm {...defaultProps} {...props} />);
}

describe("<LoginForm />", () => {
  test("hiển thị màn hình đăng nhập trống, mặc định đã checkbox", async () => {
    const { findByTestId } = renderLoginForm();

    const loginForm = await findByTestId("login-form");

    expect(loginForm).toHaveFormValues({
      username: "",
      password: "",
      remember: true
    });
  });

  test("cho phép nhập username", async () => {
    const onUsernameChange = jest.fn();
    const { findByTestId } = renderLoginForm({ onUsernameChange });
    const username = await findByTestId("username");

    fireEvent.change(username, { target: { value: "test" } });

    expect(onUsernameChange).toHaveBeenCalledWith("test");
  });

  test("cho phép nhập password", async () => {
    const onPasswordChange = jest.fn();
    const { findByTestId } = renderLoginForm({ onPasswordChange });
    const username = await findByTestId("password");

    fireEvent.change(username, { target: { value: "password" } });

    expect(onPasswordChange).toHaveBeenCalledWith("password");
  });

  test("cho phép toogle checkbox remember me", async () => {
    const onRememberChange = jest.fn();
    const { findByTestId } = renderLoginForm({
      onRememberChange,
      shouldRemember: false
    });
    const remember = await findByTestId("remember");

    fireEvent.click(remember);

    expect(onRememberChange).toHaveBeenCalledWith(true);

    fireEvent.click(remember);

    expect(onRememberChange).toHaveBeenCalledWith(false);
  });

  test.skip("submit thông tin đăng nhập", async () => {
    const onSubmit = jest.fn();
    const { findByTestId } = renderLoginForm({
      onSubmit,
      shouldRemember: false
    });
    const username = await findByTestId("username");
    const password = await findByTestId("password");
    const remember = await findByTestId("remember");
    const submit = await findByTestId("submit");

    fireEvent.change(username, { target: { value: "test" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(remember);
    fireEvent.click(submit);

    expect(onSubmit).toHaveBeenCalledWith("test", "password", true);
  });

  // test("snapshot màn hình đăng nhập", () => {
  //   it("snapshot", () => {
  //     const tree = renderer.create(<LoginForm />)
  //   })
});
