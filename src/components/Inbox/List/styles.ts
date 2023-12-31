import styled from "styled-components";
import { Card, Stack, Typography } from "@mui/material";

interface StyleProps {
  $ismobile: boolean | undefined;
}

export const Container = styled.div<StyleProps>`
  width: 250px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  padding: 5px;
  ${(props) =>
    props.$ismobile &&
    `
    width: 100%;
  `};
`;

export const TitleContainer = styled(Card)`
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 1px;
`;

export const StyledText = styled(Typography)`
  padding: 5px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledHeader = styled(Typography)`
  font-size: 15px;
  padding: 5px;
  color: blue;
  font-weight: 700;
`;

export const StyledBox = styled(Stack)`
  display: flex;
  flex-direction: column;
`;
