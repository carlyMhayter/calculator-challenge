import Head from "next/head";
import styled from "styled-components";
import { NumberButtons } from "../components/NumberButtons";
import { FuncButtons } from "../components/FuncButtons";
import { useState } from "react";
import { UtilButtons } from "../components/UtilButtons";
import styles from "../styles/Home.module.css";

const StyledMain = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  border: 1px solid red;
  padding: 1em;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: 1fr 3fr;
`;

const TotalContainer = styled.div`
  width: 100%;
  padding: 1em;
  background-color: #f8f8f8;
  border-radius: 0.25em;
  margin-bottom: 1em;
  font-size: 1.5em;
  grid-column: span 2;
`;

export const BasicButton = styled.button`
  padding: 0.5em;
  font-size: 1.5em;
  background-color: whitesmoke;
  border: 1px #edecec solid;
  border-radius: 0.25em;
  transition: 0.25s;
  min-width: 3em;
  &:hover {
    background-color: #edecec;
  }
`;

const VerticalColumn = styled.div``;
export default function Home() {
  const [total, updateTotal] = useState<string>("");
  const [selected, updateSelected] = useState<string>("");
  const [runningTotal, updateRunningTotal] = useState<string>("");

  const displayedNum =
    total === "" ? (selected !== "" ? selected : runningTotal) : total;

  console.log("total", total);
  console.log("selected", selected);
  console.log("runningTotal", runningTotal);
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <TotalContainer>{displayedNum} </TotalContainer>
        <VerticalColumn>
          <UtilButtons />
          <NumberButtons
            selected={selected}
            updateSelected={updateSelected}
            runningTotal={runningTotal}
            updateRunningTotal={updateRunningTotal}
          />
        </VerticalColumn>

        <FuncButtons
          selected={selected}
          updateSelected={updateSelected}
          total={total}
          updateTotal={updateTotal}
          runningTotal={runningTotal}
          updateRunningTotal={updateRunningTotal}
        />
      </StyledMain>
    </div>
  );
}
