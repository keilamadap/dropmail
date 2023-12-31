import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Container = styled(Stack)`
  display: flex;
`;

export const StyledStack = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  gap: 10px;
`;

export const ColumnStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
