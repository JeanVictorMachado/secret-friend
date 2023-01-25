import { useRecoilValue } from "recoil";
import { secretFriendResult } from "../atom";

export const usePrizeDrawResult = () => {
  return useRecoilValue(secretFriendResult);
};
