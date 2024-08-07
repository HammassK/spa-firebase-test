import React from "react";
import { Button } from "@mui/material";
import { createNotification } from "../firebase/notifications";

const NotificationButton: React.FC<{ message: string }> = ({ message }) => {
  const handleClick = async () => {
    await createNotification(message);
    alert("Notification created");
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      {message}
    </Button>
  );
};

export default NotificationButton;
