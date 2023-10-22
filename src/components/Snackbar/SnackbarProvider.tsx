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

export default function SimpleSnackbar({ setIsOpen, isOpen }: any) {
  const handleClick = () => {
    setIsOpen(true);
  };

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

  React.useEffect(() => {
    handleClick();
  }, []);

  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success" sx={{ width: "100%" }} action={action}>
        Text copied!
      </Alert>
    </Snackbar>
  );
}
