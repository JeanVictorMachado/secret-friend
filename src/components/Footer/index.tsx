import { useNavigate } from "react-router-dom";

import { useParticipantsList } from "../../state/hooks/use-participants-list";
import { useDrawer } from "../../state/hooks/use-drawer";

import * as S from "./styles";

export const Footer = () => {
  const navigate = useNavigate();

  const participantsList = useParticipantsList();
  const drawer = useDrawer();

  const handleJokeStarted = () => {
    drawer();
    navigate("/sorteio");
  };

  return (
    <S.Footer>
      <S.Button
        onClick={handleJokeStarted}
        disabled={participantsList.length < 3}
      >
        Iniciar brincadeira
      </S.Button>

      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </S.Footer>
  );
};
