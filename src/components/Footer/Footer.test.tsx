import {
  renderWithRecoil,
  fireEvent,
  screen,
} from "../../utils/setupTests/renderWithRecoil";

import { useParticipantsList } from "../../state/hooks/use-participants-list";

import { Footer } from ".";

const participantsList = ["Ana", "Catarina", "João"];

jest.mock("../../state/hooks/use-participants-list", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

const mockDrawer = jest.fn();

jest.mock("../../state/hooks/use-drawer", () => {
  return {
    useDrawer: () => mockDrawer,
  };
});

describe("When there are no sufficient participants", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  it("The joke cannot be started", () => {
    renderWithRecoil(<Footer />);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});

describe("When there are enough participants", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participantsList);
  });

  it("The joke can be started", () => {
    renderWithRecoil(<Footer />);

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });

  it("The joke has started", () => {
    renderWithRecoil(<Footer />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
    expect(mockDrawer).toHaveBeenCalledTimes(1);
  });
});
