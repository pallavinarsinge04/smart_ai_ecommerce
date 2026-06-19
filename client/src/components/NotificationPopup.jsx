
import { useNotification } from "../context/NotificationContext";

function NotificationPopup() {
  const { notifications } =
    useNotification();

  return (
    <div>
      <h2>Notifications</h2>

      {notifications.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "8px",
          }}
        >
          {item.message || item}
        </div>
      ))}
    </div>
  );
}

export default NotificationPopup;
