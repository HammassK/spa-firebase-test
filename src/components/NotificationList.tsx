import React, { useEffect, useState } from "react";
import { getNotifications, markAsRead } from "../firebase/notifications";

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications();
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id);
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  return (
    <ul>
      {notifications.map((notification) => (
        <li key={notification.id}>
          {notification.message} - {notification.read ? "Read" : "Unread"}
          {!notification.read && (
            <button onClick={() => handleMarkAsRead(notification.id)}>
              Mark as read
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NotificationList;
