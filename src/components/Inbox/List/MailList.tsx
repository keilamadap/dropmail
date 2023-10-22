import useMedia from "../../../hooks/useMedia";
import * as S from "./styles";
import EmptyMails from "../../EmptyMails/EmptyMails";
import { MailProps } from "../../../types/mailType";
import { Typography } from "@mui/material";

const EmailList = ({ mails }: MailProps) => {
  const mobile = useMedia("(max-width: 1000px)");

  return (
    <S.Container $ismobile={mobile ? true : undefined}>
      <S.TitleContainer variant="outlined">
        <Typography variant="subtitle2">Inbox</Typography>
      </S.TitleContainer>
      {mails.length > 0 ? (
        mails.map((mail) => (
          <S.StyledBox key={mail.id}>
            <S.StyledHeader variant="body1">
              {mail.headerSubject}
            </S.StyledHeader>
            <S.StyledInfo variant="body1"> {mail.text}</S.StyledInfo>
          </S.StyledBox>
        ))
      ) : (
        <EmptyMails />
      )}
    </S.Container>
  );
};

export default EmailList;
