import { useParticipantsList } from "../../state/hooks/use-participants-list";

import * as S from "./styles";

export const ParticipantsList = () => {
  const participants = useParticipantsList();

  return (
    <S.Ul>
      {participants.map((participant) => (
        <S.Li key={participant} role="listitem">
          {participant}
        </S.Li>
      ))}
    </S.Ul>
  );
};
