import styled from "styled-components";
import { Input, Stack, TextField, Button } from "@mui/material";

interface MainStyleProps {
  $ismobile: boolean | undefined;
}

export const Container = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledStack = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const RefreshDiv = styled.div<MainStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  width: 100%;

  ${(props) =>
    props.$ismobile &&
    `
  flex-direction: column;
  `};
`;

export const StyledInput = styled(Input)<MainStyleProps>`
  width: 400px;
  height: 40px;
  padding-left: 10px;
  background: #fff;
  ${(props) =>
    props.$ismobile &&
    `
    width: 100%;
  `};
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
`;
