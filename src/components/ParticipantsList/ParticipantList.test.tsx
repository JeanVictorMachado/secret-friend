import {
  renderWithRecoil,
  screen,
} from "../../utils/setupTests/renderWithRecoil";

import { useParticipantsList } from "../../state/hooks/use-participants-list";

import { ParticipantsList } from ".";

const participantsList = ["Ana", "Catarina"];

jest.mock("../../state/hooks/use-participants-list", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe("Empty participants list", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  it("The participants list must be empty", () => {
    renderWithRecoil(<ParticipantsList />);

    const items = screen.queryAllByRole("list-item");
    expect(items).toHaveLength(0);
  });
});

describe("Filled participants list", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participantsList);
  });

  it("The participants list must be filled", () => {
    renderWithRecoil(<ParticipantsList />);

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participantsList.length);
  });
});
