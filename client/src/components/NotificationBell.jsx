
import { useNotification } from "../context/NotificationContext";

function NotificationBell() {
  const { notifications } =
    useNotification();

  return (
    <div style={{ position: "relative" }}>
      🔔

      <span
        style={{
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 8px",
          marginLeft: "5px",
        }}
      >
        {notifications.length}
      </span>
    </div>
  );
}

export default NotificationBell;
