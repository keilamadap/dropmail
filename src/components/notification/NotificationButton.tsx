import { Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import * as S from "./styles";

interface NotificationButtonProps {
  lastReceivedMailId: string | null;
}

function NotificationButton({ lastReceivedMailId }: NotificationButtonProps) {
  const [notificationPermission, setNotificationPermission] = useState(
    Notification.permission
  );

  useEffect(() => {
    setNotificationPermission(Notification.permission);
  }, []);

  const requestNotificationPermission = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        setNotificationPermission(permission);
      });
    }
  };

  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Novo email recebido!", {
        body: "Você tem um novo email na sua caixa de entrada.",
      });
    }
  };

  return (
    <Stack>
      {notificationPermission === "granted" ? (
        lastReceivedMailId ? (
          <>
            <Button variant="contained" onClick={showNotification}>
              Abrir Notificações
            </Button>
          </>
        ) : (
          <S.StyledStack>
            <Typography variant="body2">Sem novas notificações</Typography>
            <Icon icon="ep:mute-notification" />
          </S.StyledStack>
        )
      ) : (
        <Stack>
          <Typography variant="caption">
            Para receber notificações de novos emails, clique no botão abaixo:
          </Typography>
          <Button
            variant="contained"
            onClick={requestNotificationPermission}
            sx={{ gap: "10px" }}
          >
            Permitir notificações{" "}
            <Icon icon="basil:notification-on-outline" width="20" height="20" />
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export default NotificationButton;
