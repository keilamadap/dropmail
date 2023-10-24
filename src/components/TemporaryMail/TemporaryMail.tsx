import { Button, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import * as S from "./styles";
import { useEffect, useState } from "react";
import useMedia from "../../hooks/useMedia";
import SimpleSnackbar from "../Snackbar/SnackbarProvider";

type TemporaryMailProps = {
  randomEmail: string;
  handleIncomingMail: () => Promise<void>;
};

const TemporaryEmail = ({
  randomEmail,
  handleIncomingMail,
}: TemporaryMailProps) => {
  const mobile = useMedia("(max-width: 1000px)");
  const [countdown, setCountdown] = useState<number>(15);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(randomEmail);
    setIsCopied(true);
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
  }, []);

  const resetCounter = () => {
    handleIncomingMail();
    setCountdown(15);
  };

  return (
    <S.Container>
      <Stack>
        <Typography variant="body1">Your Temporary Email Address:</Typography>

        <S.Span>
          <S.StyledInput
            value={randomEmail}
            $ismobile={mobile ? true : undefined}
            type="text"
            endAdornment={
              <Button
                color="primary"
                variant="contained"
                size="medium"
                onClick={copyToClipboard}
              >
                Copy
              </Button>
            }
          />
        </S.Span>

        {isCopied && (
          <SimpleSnackbar setIsOpen={setIsCopied} isOpen={isCopied} />
        )}

        <S.StyledDiv $ismobile={mobile ? true : undefined}>
          <S.Span>
            <Typography variant="subtitle2">
              AutoRefresh in {countdown}
            </Typography>

            <Icon icon="line-md:loading-loop" width="20" height="20" />
          </S.Span>
          <S.Span>
            <Typography variant="subtitle2">Refresh</Typography>
            <Icon
              icon="ep:refresh"
              width="20"
              style={{ cursor: "pointer" }}
              height="20"
              onClick={resetCounter}
            />
          </S.Span>
        </S.StyledDiv>
      </Stack>
    </S.Container>
  );
};

export default TemporaryEmail;
