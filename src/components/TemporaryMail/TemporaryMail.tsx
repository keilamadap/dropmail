import { Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import * as S from "./styles";
import { useEffect, useState } from "react";
import useMedia from "../../hooks/useMedia";

type TemporaryMailProps = {
  randomEmail: string;
  handleIncomingMail: any;
};

const TemporaryEmail = ({
  randomEmail,
  handleIncomingMail,
}: TemporaryMailProps) => {
  const mobile = useMedia("(max-width: 1000px)");
  const [isCopied, setIsCopied] = useState(false);
  const [countdown, setCountdown] = useState(15);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(randomEmail);
    setIsCopied(true);
    setInterval(() => {
      setIsCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown === 0 ? (handleIncomingMail(), 15) : prevCountdown - 1
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [randomEmail]);

  const resetCounter = () => {
    handleIncomingMail();
    setCountdown(15);
  };

  return (
    <S.Container>
      <S.StyledStack>
        <S.Label variant="subtitle2">Your Temporary Email Address:</S.Label>

        <S.StyledTextfield
          variant="outlined"
          $ismobile={mobile ? true : undefined}
          value={randomEmail}
          InputProps={{
            endAdornment: (
              <S.Span>
                <Icon
                  icon="iconamoon:copy"
                  width="20"
                  height="20"
                  onClick={copyToClipboard}
                />
                <Typography variant="body2" onClick={copyToClipboard}>
                  {isCopied ? "Copied" : "Copy"}
                </Typography>
              </S.Span>
            ),
          }}
        />
        <S.RefreshDiv $ismobile={mobile ? true : undefined}>
          <S.MiniDiv>
            <S.StyledTypography variant="subtitle2">
              AutoRefresh in {countdown}
            </S.StyledTypography>

            <Icon icon="line-md:loading-loop" width="20" height="20" />
          </S.MiniDiv>
          <S.MiniDiv>
            <S.StyledTypography variant="subtitle2">Refresh</S.StyledTypography>
            <Icon
              icon="ep:refresh"
              width="20"
              style={{ cursor: "pointer" }}
              height="20"
              onClick={resetCounter}
            />
          </S.MiniDiv>
        </S.RefreshDiv>
      </S.StyledStack>
    </S.Container>
  );
};

export default TemporaryEmail;
