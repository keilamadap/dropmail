import styled from "styled-components";

interface StyleProps {
  $ismobile: boolean | undefined;
}

export const MainContainer = styled.div<StyleProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  ${(props) =>
    props.$ismobile &&
    `
    margin-top: 10px;
    padding: 10px;
  `};
`;

export const StyledDiv = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  height: 100%;

  ${(props) =>
    props.$ismobile &&
    `
    flex-direction: column;
  `};
`;
