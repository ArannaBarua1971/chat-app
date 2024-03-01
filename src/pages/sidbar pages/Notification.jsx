import React from "react";

function Notification() {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "You have received a new message from John Doe.",
    },
    {
      id: 2,
      title: "Reminder",
      message: "Don't forget to attend the meeting at 2:00 PM.",
    },
    {
      id: 3,
      title: "Update Available",
      message: "A new version of the application is available. Please update.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Notifications</h1>
      <div className="grid gap-4">
        {notifications.map((notification, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{notification.title}</h2>
            <p className="text-gray-600">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
