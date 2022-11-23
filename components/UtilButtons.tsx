import styled from "styled-components";
import { BasicButton } from "../pages";

const ButtonsContainer = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.25em;
  button {
    width: 98%;
    margin-right: 0.25em;
    :last-of-type {
      margin-right: 0em;
    }
  }
`;

interface ButtonProps {
  updateSelected: Function;
  updateRunningTotal: Function;
  runningTotal: string;
  selected: string;
  action: string;
}

export function UtilButtons({
  updateSelected,
  updateRunningTotal,
  action,
  runningTotal,
  selected,
}: ButtonProps) {
  return (
    <ButtonsContainer>
      <BasicButton
        onClick={() => {
          updateSelected("");
          updateRunningTotal("");
        }}
      >
        AC
      </BasicButton>
      <BasicButton
        onClick={() => {
          const neg = parseFloat(selected ? selected : runningTotal) * -1;
          if (selected === "") {
            updateRunningTotal(neg.toString());
          } else {
            updateSelected(neg.toString());
          }
        }}
      >
        +/-
      </BasicButton>
      <BasicButton
        onClick={() => {
          const dec = parseFloat(selected ? selected : runningTotal) / 100;
          if (action !== "") {
            //if action is not blank
            updateRunningTotal(dec.toString());
          } else {
            // if action is supplied
            updateSelected(dec.toString());
          }
        }}
      >
        %
      </BasicButton>
    </ButtonsContainer>
  );
}
