import { Stack } from "@mui/material";
import * as S from "./styles";
import { Icon } from "@iconify/react";

const EmptyMails = () => {
  return (
    <Stack>
      <S.StyledTypography variant="body1">
        <Icon icon="uil:cloud" width="30" />
        Waiting for new mail...
      </S.StyledTypography>
    </Stack>
  );
};

export default EmptyMails;
