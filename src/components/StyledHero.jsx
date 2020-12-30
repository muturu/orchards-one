import styled from "styled-components";

export const StyledHero = styled.header`
  min-height: 75vh;
  background: url(${(props) => props.image}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
