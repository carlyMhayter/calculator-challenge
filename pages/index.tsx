import Head from "next/head";
import styled from "styled-components";
import { NumberButtons } from "../components/NumberButtons";
import { FuncButtons } from "../components/FuncButtons";
import { useState } from "react";
import { UtilButtons } from "../components/UtilButtons";

const StyledMain = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  padding: 1em;
  display: grid;
  transform: translate(-50%, 0%);
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: 1fr 3fr;
  background-color: #fdfdfd;
  border-radius: 0.5em;
  border: 1px #edecec solid;
`;

const TotalContainer = styled.div`
  width: 100%;
  padding: 1em;
  background-color: #f8f8f8;
  border-radius: 0.25em;
  margin-bottom: 1em;
  font-size: 1.5em;
  grid-column: span 2;
  min-height: 85px;
  border: 1px #edecec solid;
  text-align: right;
`;

export const BasicButton = styled.button`
  padding: 0.5em;
  font-size: 1.5em;
  background-color: whitesmoke;
  border: 1px #edecec solid;
  border-radius: 0.25em;
  transition: 0.25s;
  &:hover {
    background-color: #edecec;
  }
  &:active {
    background-color: white;
    transform: translate(0em, 0.12em);
  }
`;

const VerticalColumn = styled.div``;
export default function Home() {
  const [selected, updateSelected] = useState<string>("");
  const [runningTotal, updateRunningTotal] = useState<string>("");
  const [action, updateAction] = useState<string>("");

  const displayedNum = selected === "" ? runningTotal : selected;
  console.log("selected", selected);
  console.log("runningTotal", runningTotal);
  console.log("action", action);
  return (
    <div>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <TotalContainer>{displayedNum} </TotalContainer>
        <VerticalColumn>
          <UtilButtons
            action={action}
            runningTotal={runningTotal}
            selected={selected}
            updateSelected={updateSelected}
            updateRunningTotal={updateRunningTotal}
            updateAction={updateAction}
          />
          <NumberButtons selected={selected} updateSelected={updateSelected} />
        </VerticalColumn>
        <FuncButtons
          selected={selected}
          updateSelected={updateSelected}
          runningTotal={runningTotal}
          updateRunningTotal={updateRunningTotal}
          action={action}
          updateAction={updateAction}
        />
      </StyledMain>
    </div>
  );
}
