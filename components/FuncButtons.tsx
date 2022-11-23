import styled from "styled-components";
import { mathFunctions } from "../utils/math";
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
interface ExecuteProps {
  selected: string;
  runningTotal: string;
  previousAction: string;
  nextAction: string;
}

export function FuncButtons({
  selected,
  updateSelected,
  runningTotal,
  updateRunningTotal,
  updateAction,
  action,
}: FuncProps) {
  const execute = ({
    selected,
    runningTotal,
    previousAction,
    nextAction,
  }: ExecuteProps) => {
    if (action === "") {
      updateRunningTotal(selected);
      updateSelected("");
      updateAction(nextAction);
      return;
    }
    const func = mathFunctions[previousAction];
    const calc = func({ x: runningTotal, y: selected });
    updateRunningTotal(calc);
    updateSelected("");
    updateAction(nextAction);
  };

  return (
    <>
      <ButtonContainer>
        <BasicButton
          onClick={() => {
            execute({
              selected,
              runningTotal,
              previousAction: action,
              nextAction: "add",
            });
          }}
        >
          +
        </BasicButton>
        <BasicButton
          onClick={() => {
            execute({
              selected,
              runningTotal,
              previousAction: action,
              nextAction: "sub",
            });
          }}
        >
          -
        </BasicButton>
        <BasicButton
          onClick={() => {
            execute({
              selected,
              runningTotal,
              previousAction: action,
              nextAction: "div",
            });
          }}
        >
          /
        </BasicButton>
        <BasicButton
          onClick={() => {
            execute({
              selected,
              runningTotal,
              previousAction: action,
              nextAction: "mult",
            });
          }}
        >
          x
        </BasicButton>
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
