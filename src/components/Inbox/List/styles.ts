import styled from "styled-components";
import { Box, Typography } from "@mui/material";

interface StyleProps {
  $ismobile: boolean | undefined;
}

export const Container = styled.div<StyleProps>`
  width: 300px;
  border: 1px solid #d4d4d4;

  ${(props) =>
    props.$ismobile &&
    `
    width: 100%;
    border: 1px solid #d4d4d4;
  `};
`;

export const TitleContainer = styled.div`
  text-align: center;
`;

export const StyledTitle = styled(Typography)`
  font-size: 15px;
  padding: 10px;
`;

export const StyledInfo = styled(Typography)`
  font-size: 15px;
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

export const StyledBox = styled(Box)`
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  flex-direction: column;
`;
