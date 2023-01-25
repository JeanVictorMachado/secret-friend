import { useSetRecoilState } from "recoil";

import { makeDraw } from "../../helpers/makeDraw";
import { secretFriendResult } from "../atom";
import { useParticipantsList } from "./use-participants-list";

export const useDrawer = () => {
  const participantsList = useParticipantsList();
  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const result = makeDraw(participantsList);

    setResult(result);
  };
};
