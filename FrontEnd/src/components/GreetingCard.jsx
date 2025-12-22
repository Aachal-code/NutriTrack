/**
 * GREETING CARD COMPONENT
 * =======================
 * Displays a personalized greeting with user info
 * Shows current trimester/month and due date
 */

export default function GreetingCard({ userName = "Sarah Johnson", trimester = "Trimester 2", dueDate = "2025-06-15" }) {
  return (
    <div className="greeting-card">
      <div className="greeting-header">
        <div className="greeting-text">
          <h1>Hello, <br /> <strong>{userName}</strong></h1>
        </div>
        <div className="profile-avatar">
          <span>👤</span>
        </div>
      </div>
      
      <div className="trimester-info">
        <div className="info-badge">
          <span className="badge-icon">❤️</span>
          <div className="badge-content">
            <p className="badge-label">{trimester}</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
        <div className="due-date">
          <p>Due Date: <strong>{formatDate(dueDate)}</strong></p>
        </div>
      </div>
    </div>
  );
}

// Helper function to format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-CA', options);
}
