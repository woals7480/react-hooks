const UseNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.permission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

const Notification = () => {
  const triggerNotif = UseNotification("Hello man~~");
  return (
    <div>
      <button onClick={triggerNotif}>Click!!</button>
    </div>
  );
};

export default Notification;
