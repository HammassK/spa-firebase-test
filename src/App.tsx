import React from "react";
import NotificationButton from "./components/NotificationButton";
import NotificationList from "./components/NotificationList";
import { FirebaseProvider } from "./context/FirebaseContext";

const App: React.FC = () => {
  return (
    <FirebaseProvider>
      <div>
        <h1>Notification System</h1>
        <NotificationButton message="Notification 1" />
        <NotificationButton message="Notification 2" />
        <NotificationButton message="Notification 3" />
        <NotificationList />
      </div>
    </FirebaseProvider>
  );
};

export default App;
