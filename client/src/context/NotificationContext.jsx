
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import socket from "../services/socket";

const NotificationContext =
  createContext();

export function NotificationProvider({
  children,
}) {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    socket.emit("joinRoom", "demo-user");

    socket.on(
      "notification",
      (message) => {
        setNotifications((prev) => [
          message,
          ...prev,
        ]);
      }
    );

    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () =>
  useContext(NotificationContext);
