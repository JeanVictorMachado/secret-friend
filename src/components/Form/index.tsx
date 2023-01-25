import { useRef, useState } from "react";
import { useAddParticipant } from "../../state/hooks/use-add-participant";
import { useErrorMessage } from "../../state/hooks/use-error-message";

import * as S from "./styles";

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setAddNameList = useAddParticipant();
  const errorMessage = useErrorMessage();

  const [name, setName] = useState("");

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    inputRef.current?.focus();
    setAddNameList(name);
    setName("");
  };

  return (
    <form onSubmit={addParticipant}>
      <S.FormContent>
        <input
          type="text"
          ref={inputRef}
          placeholder="Insira os nomes dos participantes"
          onChange={({ target }) => setName(target.value)}
          value={name}
        />
        <button disabled={!name}>Adicionar</button>
      </S.FormContent>

      {errorMessage && (
        <S.ErrorMessage role="alert">{errorMessage}</S.ErrorMessage>
      )}
    </form>
  );
};
