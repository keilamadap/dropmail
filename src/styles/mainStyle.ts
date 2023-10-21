import styled from "styled-components";

interface StyleProps {
  $ismobile: boolean | undefined;
}

export const MainContainer = styled.div<StyleProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  ${(props) =>
    props.$ismobile &&
    `
    height: 100%;
    padding-top: 50px;
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
