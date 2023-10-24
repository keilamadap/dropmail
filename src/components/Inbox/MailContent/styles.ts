import styled from "styled-components";
import { Card, Typography } from "@mui/material";

interface StyleProps {
  $ismobile: boolean | undefined;
}

export const Container = styled.div<StyleProps>`
  border: 1px solid #d4d4d4;
  background-color: #f8f8f8;
  padding: 20px;
  width: 800px;
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.$ismobile &&
    `
    
    height: 100%;
    width: 100%;
    display: flex;
    
`};
`;

export const Title = styled(Typography)`
  text-shadow: -2px 1px 2px rgba(215, 215, 215, 0.6);
  text-align: center;
`;

export const StyledCard = styled(Card)`
  padding: 10px;
  width: 100%;
  text-align: justify;
  height: 100%;
  margin-top: 15px;
`;

export const EmptyMailsCard = styled(Card)`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;
  height: 100%;
  margin-top: 15px;
`;
