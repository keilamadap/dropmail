import { Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import * as S from "./styles";

type NotificationButtonProps = {
  lastReceivedMailId: string | null;
};

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
      new Notification("New email received!", {
        body: "You have 1 unread email.",
      });
    }
  };

  return (
    <Stack sx={{ display: "flex" }}>
      {notificationPermission === "granted" ? (
        lastReceivedMailId ? (
          <>
            <Button variant="contained" onClick={showNotification}>
              Open Notification
            </Button>
          </>
        ) : (
          <S.StyledStack>
            <Typography variant="caption">No Notifications</Typography>
            <Icon icon="ep:mute-notification" />
          </S.StyledStack>
        )
      ) : (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="caption">
            To receive notifications of new emails, click the button below:
          </Typography>
          <Button
            variant="contained"
            onClick={requestNotificationPermission}
            sx={{ gap: "10px", width: "10px" }}
          >
            <Icon icon="basil:notification-on-outline" width="20" height="20" />
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export default NotificationButton;
