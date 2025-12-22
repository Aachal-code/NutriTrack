/**
 * REMINDER CARD COMPONENT
 * =======================
 * Displays health reminders in a clean card layout
 * Shows reminders with icons and timestamps
 */

export default function ReminderCard({ reminders = [] }) {
  const defaultReminders = [
    {
      id: 1,
      title: "Vaccine Due Tomorrow",
      description: "2nd dose of Hepatitis B",
      icon: "💉"
    },
    {
      id: 2,
      title: "Doctor Appointment",
      description: "Dec 5, 2025 at 10:00 AM",
      icon: "📅"
    }
  ];

  const displayReminders = reminders.length > 0 ? reminders : defaultReminders;

  return (
    <div className="reminders-section">
      <div className="section-header">
        <h2>Today's Reminders</h2>
        <span className="reminder-badge">{displayReminders.length}</span>
      </div>

      <div className="reminders-list">
        {displayReminders.map((reminder) => (
          <div key={reminder.id} className="reminder-item">
            <div className="reminder-icon">{reminder.icon}</div>
            <div className="reminder-content">
              <h3>{reminder.title}</h3>
              <p>{reminder.description}</p>
            </div>
            <div className="reminder-action">
              🔔
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
