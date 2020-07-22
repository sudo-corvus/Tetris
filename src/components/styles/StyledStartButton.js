import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 10px;
  min-height: 30px;
  width: 100%;
  border: none;
  background: #084e64;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  color: #ff4655;
  text-transform: uppercase;
  box-shadow: 0 0 0 5px inset rgba(#fff, 0.3);
  position: relative;

  &:after,
  &:before {
    content: "";
    width: 2px;
    position: absolute;
    height: 15px;
    background: #fff;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    right: 0;
    left: initial;
  }

  & p {
    margin: 0;
    height: 54px;
    line-height: 54px;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    & span.base {
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 1px solid #ff4655;
      &:before {
        content: "";
        width: 2px;
        height: 2px;
        left: -1px;
        top: -1px;
        background: #0f1923;
        position: absolute;
        transition: 0.3s ease-out all;
      }
    }
    & span.bg {
      left: -5%;
      position: absolute;
      background: #ff4655;
      width: 0;
      height: 100%;
      z-index: 3;
      transition: 0.3s ease-out all;
      transform: skewX(-10deg);
    }
    & span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      &:after {
        content: "";
        width: 4px;
        height: 4px;
        right: 0;
        bottom: 0;
        background: #0f1923;
        position: absolute;
        transition: 0.3s ease-out all;
        z-index: 5;
      }
    }
  }

  &:hover {
    color: #fff;
    & span.bg {
      width: 110%;
    }
    & span.text:after {
      background: #fff;
    }
  }
`;
