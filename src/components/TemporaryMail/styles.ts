import styled from "styled-components";
import { Stack, Typography, TextField } from "@mui/material";

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

export const StyledTextfield = styled(TextField)<MainStyleProps>`
  width: 300px;
  height: 50px;

  ${(props) =>
    props.$ismobile &&
    `
    width: 100%;
  `};
`;

export const Label = styled(Typography)`
  width: 100%;
  font-size: 14px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 10px;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MiniDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
