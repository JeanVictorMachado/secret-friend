import { makeDraw } from "../makeDraw";

const mockParticipantsList = [
  "Ana",
  "Jéssica",
  "Aurora",
  "Jean",
  "Lucas",
  "Pedro",
];

describe("Secret friend giveaway", () => {
  it("Each participant must not draw their own name", () => {
    const prizeDraw = makeDraw(mockParticipantsList);

    mockParticipantsList.forEach((participant) => {
      const secretFriend = prizeDraw.get(participant);

      expect(secretFriend).not.toEqual(participant);
    });
  });
});
