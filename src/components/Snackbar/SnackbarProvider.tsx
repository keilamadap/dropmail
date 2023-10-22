import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type SnackbarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function SimpleSnackbar({ setIsOpen, isOpen }: SnackbarProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="inherit" size="small" onClick={handleClose}>
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="default"
        onClick={handleClose}
      ></IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
    >
      <Alert severity="success" action={action}>
        Text copied!
      </Alert>
    </Snackbar>
  );
}
