import styled from "styled-components";
import { Card, Typography } from "@mui/material";

interface MainStyleProps {
  $ismobile: boolean | undefined;
}

export const Container = styled.div<MainStyleProps>`
  border: 1px solid #d4d4d4;
  background-color: #f8f8f8;
  padding: 20px;
  width: 100%;
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
    align-items:center;
`};
`;

export const Paragraph = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

export const MailInfo = styled(Typography)`
  font-size: 17px;
  font-weight: 600;
`;

export const StyledCard = styled(Card)`
  padding: 10px;
  width: 100%;
  text-align: justify;
  height: 100%;
  margin-top: 15px;
`;

export const NoMailsCard = styled(Card)`
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
