import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header className="cabecalho">
      <S.LogoImage role="img" aria-label="Logo do Sorteador"></S.LogoImage>

      <S.Participation
        src="/images/participante.png"
        alt="Participante com um presente na mão"
      />
    </S.Header>
  );
};
