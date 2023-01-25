import { useState } from "react";

import { useParticipantsList } from "../../state/hooks/use-participants-list";
import { usePrizeDrawResult } from "../../state/hooks/use-prize-draw-result";
import { Card } from "../../components/Card";

import * as S from "./styles";

export const PrizeDraw = () => {
  const participantsList = useParticipantsList();
  const prizeDrawResult = usePrizeDrawResult();

  const [participantInTheTime, setParticipantInTheTime] = useState("");
  const [secretFriend, setSecretFriend] = useState("");

  const handleDrawer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (prizeDrawResult.has(participantInTheTime)) {
      setSecretFriend(prizeDrawResult.get(participantInTheTime)!);
    }
  };

  return (
    <Card>
      <section>
        <h2>Quem vai tirar o papelzinho?</h2>

        <S.Form onSubmit={handleDrawer}>
          <S.Select
            id="participant-of-the-time"
            name="participant-of-the-time"
            placeholder="Selecione o seu nome"
            value={participantInTheTime}
            onChange={({ target }) => setParticipantInTheTime(target.value)}
          >
            <option>Selecione seu nome</option>
            {participantsList.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </S.Select>

          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>

          <S.DrawerButton>Sortear</S.DrawerButton>
        </S.Form>

        {secretFriend && <S.ResulText role="alert">{secretFriend}</S.ResulText>}

        <S.Footer>
          <img src="/images/aviao.png" alt="Um desenho de um avião de papel" />
        </S.Footer>
      </section>
    </Card>
  );
};
