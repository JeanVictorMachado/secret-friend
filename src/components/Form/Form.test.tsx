import {
  renderWithRecoil,
  fireEvent,
  screen,
} from "../../utils/setupTests/renderWithRecoil";
import { act } from "react-dom/test-utils";

import { Form } from ".";

describe("<Form />", () => {
  it("When the input is empty, new participants cannot be added", () => {
    renderWithRecoil(<Form />);

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("Add participant if input is filled", () => {
    renderWithRecoil(<Form />);

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  it("Duplicate names cannot be added to the list", () => {
    renderWithRecoil(<Form />);

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  it("The error message should disappear after the timers", () => {
    jest.useFakeTimers();

    renderWithRecoil(<Form />);

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
