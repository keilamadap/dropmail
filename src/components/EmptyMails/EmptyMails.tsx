import * as S from "./styles";
import { Icon } from "@iconify/react";

const EmptyMails = () => {
  return (
    <S.Container>
      <S.StyledTypography variant="body1">
        <Icon icon="uil:cloud" width="30" />
        Waiting for new mail...
      </S.StyledTypography>
    </S.Container>
  );
};

export default EmptyMails;
