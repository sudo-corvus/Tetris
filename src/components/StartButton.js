import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>
    <p>
      <span class="bg"></span>
      <span class="base"> </span>
      <span class="text">Play Tetris</span>
    </p>
  </StyledStartButton>
);

export default StartButton;
