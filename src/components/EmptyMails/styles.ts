import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack)`
  border-top: 1px solid #d4d4d4;
`;

export const StyledTypography = styled(Typography)`
  font-size: 12px;
  padding: 10px 15px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;
