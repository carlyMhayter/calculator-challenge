import styled from "styled-components";
import { BasicButton } from "../pages/index";

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 6em 6em 6em;
  grid-gap: 0.25em;

  button:nth-of-type(10) {
    grid-column: span 2;
  }
`;

interface NumberProps {
  selected: string;
  updateSelected: Function;

  children?: string;
}

export function NumberButtons({ selected, updateSelected }: NumberProps) {
  const numbers: number[] = Array.from(Array(10).keys()).reverse();

  return (
    <ButtonsContainer>
      {numbers.map((number) => (
        <BasicButton
          type="button"
          key={number}
          onClick={() => {
            updateSelected(selected + number);
          }}
        >
          {number}
        </BasicButton>
      ))}
      <BasicButton
        onClick={() => {
          if (selected.includes(".") || selected.includes("NaN")) {
          } else {
            updateSelected(selected + ".");
          }
        }}
      >
        .
      </BasicButton>
    </ButtonsContainer>
  );
}
