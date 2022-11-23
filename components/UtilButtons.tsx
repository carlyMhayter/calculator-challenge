import styled from "styled-components";
import { BasicButton } from "../pages";

const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 6em 6em 6em;
  /* border: 1px solid green; */

  /*  button {
    width: 98%;
    margin-right: 0.25em;
    :last-of-type {
      margin-right: 0em;
    } 
  }*/
`;

interface ButtonProps {
  updateSelected: Function;
  updateRunningTotal: Function;
  updateAction: Function;
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
  updateAction,
}: ButtonProps) {
  return (
    <ButtonsContainer>
      <BasicButton
        onClick={() => {
          updateSelected("");
          updateRunningTotal("");
          updateAction("");
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
