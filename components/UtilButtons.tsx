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

export function UtilButtons() {
  return (
    <ButtonsContainer>
      <BasicButton>AC</BasicButton>
      <BasicButton>+/-</BasicButton>
      <BasicButton>%</BasicButton>
    </ButtonsContainer>
  );
}
