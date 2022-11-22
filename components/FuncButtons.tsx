import styled from "styled-components";
import { add, subtract, multiply, divide, exp } from "../utils/math";
import { BasicButton } from "../pages";

const ButtonContainer = styled.div`
  padding: 0em 0.25em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface FuncProps {
  total: string;
  updateTotal: Function;
  selected: string;
  updateSelected: Function;
  runningTotal: string;
  updateRunningTotal: Function;
  children?: string;
}

export function FuncButtons({
  total,
  updateTotal,
  selected,
  updateSelected,
  runningTotal,
  updateRunningTotal,
}: FuncProps) {
  return (
    <>
      <ButtonContainer>
        <BasicButton
          onClick={() => {
            const sum = add(runningTotal, selected);
            console.log("sum", sum);
          }}
        >
          +
        </BasicButton>
        <BasicButton>-</BasicButton>
        <BasicButton>/</BasicButton>
        <BasicButton>x</BasicButton>
        <BasicButton>=</BasicButton>
      </ButtonContainer>
    </>
  );
}
