/**
 * BOTTOM NAVIGATION COMPONENT
 * ===========================
 * Mobile navigation bar with 5 main sections
 * Active state indicated by color
 */

export default function BottomNavigation({ activeTab = "Home" }) {
  const tabs = [
    { id: 1, label: "Home", icon: "🏠" },
    { id: 2, label: "Nutrition", icon: "🍎" },
    { id: 3, label: "Vaccines", icon: "💉" },
    { id: 4, label: "Feeding", icon: "👶" },
    { id: 5, label: "Growth", icon: "📈" }
  ];

  return (
    <nav className="bottom-navigation">
      {tabs.map((tab) => (
        <div 
          key={tab.id} 
          className={`nav-item ${activeTab === tab.label ? 'active' : ''}`}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span className="nav-label">{tab.label}</span>
        </div>
      ))}
    </nav>
  );
}
