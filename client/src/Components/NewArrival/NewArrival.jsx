import React from "react";
import ImgCard from "../../Components/ImgCard/ImgCard";
import styled from "styled-components";

function SpecialProducts({ data }) {
  return (
    <Container>
      {data.map((item, id) => (
        <ImgCard data={item} key={id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 30px;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default SpecialProducts;
