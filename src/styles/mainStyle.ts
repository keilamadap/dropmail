import styled from "styled-components";

interface StyleProps {
  $ismobile: boolean | undefined;
}

export const MainContainer = styled.div<StyleProps>`
  padding: 20px;
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  ${(props) =>
    props.$ismobile &&
    `
    height: 100%;
    padding-top: 50px;
    padding: 10px;
  `};
`;

export const StyledDiv = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;

  ${(props) =>
    props.$ismobile &&
    `
    flex-direction: column;
  `};
`;
