import styled from "styled-components";

export const Button = styled.button`
  padding: 20px;
  outline: none;
  font-size: 16px;
  display: grid;
  place-content: center;
  border: 2px solid ${(props) => props.color};
  width: 250px;
  font-weight: 600;
  position: relative;
  isolation: isolate;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  color: white;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    transition: inherit;
    inset: 0;
    background-color: ${(props) => props.color};
    width: 100%;
    height: 400px;
    z-index: -1;
    transform-origin: left;
    transform: scaleX(1);
  }
  &:hover {
    &::before {
      transform: scaleX(0);
    }
    color: black;
    background-color: white;
    transition-delay: 0.2s;
  }
`;
