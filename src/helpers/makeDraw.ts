import shuffle from "just-shuffle";

export const makeDraw = (participantsList: string[]) => {
  const participantsTotal = participantsList.length;
  const shuffledList = shuffle(participantsList);

  const result = new Map<string, string>();

  for (let index = 0; index < participantsTotal; index++) {
    const friendIndex = index === participantsTotal - 1 ? 0 : index + 1;

    result.set(shuffledList[index], shuffledList[friendIndex]);
  }

  return result;
};
