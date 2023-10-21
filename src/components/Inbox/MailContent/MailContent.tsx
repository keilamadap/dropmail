import useMedia from "../../../hooks/useMedia";
import { MailProps } from "../../../types/mailType";
import * as S from "./styles";
import { Icon } from "@iconify/react";

const MailContent = ({ mails }: MailProps) => {
  const mobile = useMedia("(max-width: 1000px)");

  return (
    <S.Container $ismobile={mobile ? true : undefined}>
      <S.Paragraph variant="h5"> Welcome to your inbox</S.Paragraph>

      {mails.length > 0 ? (
        mails.map((mail) => (
          <S.StyledCard key={mail.id}>
            <S.MailInfo variant="body1">{mail.text}</S.MailInfo>
          </S.StyledCard>
        ))
      ) : (
        <S.NoMailsCard>
          <Icon icon="line-md:coffee-half-empty-twotone-loop" width="50" />
          <S.MailInfo variant="body1">No mails yet...</S.MailInfo>
        </S.NoMailsCard>
      )}
    </S.Container>
  );
};

export default MailContent;
