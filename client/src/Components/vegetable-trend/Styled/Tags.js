import styled from "styled-components";
export const NewTag = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  padding-top: 0.65rem;
  height: 2.5rem;
  width: 2.5rem;
  background-color: ${(props) => (props.isNew === "yes" ? "#ff4c3b" : "#fff")};
  color: white;
  border-radius: 65%;
`;
export const OnSaleTag = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  padding-top: 0.65rem;
  transform: rotate(-90deg);
`;
