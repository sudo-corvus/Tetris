import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #186486;
  color: ${(props) => (props.gameOver ? "red" : "#fff")};
  background: #3797ca;

  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  &:hover {
    opacity: 0.8;
  }
`;
