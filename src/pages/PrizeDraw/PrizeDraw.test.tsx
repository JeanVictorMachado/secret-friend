import {
  act,
  fireEvent,
  renderWithRecoil,
  screen,
} from "../../utils/setupTests/renderWithRecoil";

import { useParticipantsList } from "../../state/hooks/use-participants-list";
import { usePrizeDrawResult } from "../../state/hooks/use-prize-draw-result";

import { PrizeDraw } from ".";

const participantsList = ["Ana", "Catarina", "Pedro"];

const prizeDrawResult = new Map([
  ["Ana", "Jorel"],
  ["Jorel", "Catarina"],
  ["Catarina", "Ana"],
]);

jest.mock("../../state/hooks/use-participants-list", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

jest.mock("../../state/hooks/use-prize-draw-result", () => {
  return {
    usePrizeDrawResult: jest.fn(),
  };
});

describe("Prize draw page", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participantsList);
    (usePrizeDrawResult as jest.Mock).mockReturnValue(prizeDrawResult);
  });

  it("All participants can display their secret friend", () => {
    renderWithRecoil(<PrizeDraw />);

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participantsList.length + 1);
  });

  it("The secret friend is shown when requested", () => {
    renderWithRecoil(<PrizeDraw />);

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, {
      target: {
        value: participantsList[0],
      },
    });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const secretFriend = screen.getByRole("alert");

    expect(secretFriend).toBeInTheDocument();
  });

  it("Name drawn disappears after a defined time", () => {
    jest.useFakeTimers();

    renderWithRecoil(<PrizeDraw />);

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, {
      target: {
        value: participantsList[0],
      },
    });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    let alert = screen.queryByRole("alert");
    expect(alert).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    alert = screen.queryByRole("alert");
    expect(alert).not.toBeInTheDocument();
  });
});
