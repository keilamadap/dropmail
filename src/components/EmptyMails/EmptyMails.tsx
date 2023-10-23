import { Stack } from "@mui/material";
import * as S from "./styles";

const EmptyMails = () => {
  return (
    <Stack>
      <S.StyledTypography variant="body1">
        Waiting for new email...
      </S.StyledTypography>
    </Stack>
  );
};

export default EmptyMails;
