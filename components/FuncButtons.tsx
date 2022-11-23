import styled from "styled-components";
import { mathFunctions, add } from "../utils/math";
import { BasicButton } from "../pages";

const ButtonContainer = styled.div`
  padding: 0em 0.25em;
  height: 100%;
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 0.17em;
  }
`;

interface FuncProps {
  selected: string;
  updateSelected: Function;
  runningTotal: string;
  updateRunningTotal: Function;
  updateAction: Function;
  action: string;
  children?: string;
}

export function FuncButtons({
  selected,
  updateSelected,
  runningTotal,
  updateRunningTotal,
  updateAction,
  action,
}: FuncProps) {
  return (
    <>
      <ButtonContainer>
        <BasicButton
          onClick={() => {
            const calc = add({ x: runningTotal, y: selected });
            updateAction("add");
            updateRunningTotal(calc);
            updateSelected("");
          }}
        >
          +
        </BasicButton>
        <BasicButton>-</BasicButton>
        <BasicButton>/</BasicButton>
        <BasicButton>x</BasicButton>
        <BasicButton
          type="button"
          onClick={() => {
            if (action) {
              const func = mathFunctions[action];
              const calc = func({ x: runningTotal, y: selected });
              updateSelected(calc);
              updateRunningTotal("");
              updateAction("");
            }
          }}
        >
          =
        </BasicButton>
      </ButtonContainer>
    </>
  );
}
