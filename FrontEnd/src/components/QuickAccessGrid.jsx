/**
 * QUICK ACCESS GRID COMPONENT
 * ===========================
 * Displays quick access buttons in a 2x2 grid
 * Each item has an icon and label
 */

export default function QuickAccessGrid({ items = [] }) {
  const defaultItems = [
    {
      id: 1,
      title: "Nutrition Tips",
      icon: "🍎",
      color: "#e8f5e9"
    },
    {
      id: 2,
      title: "Vaccines",
      icon: "💉",
      color: "#e3f2fd"
    },
    {
      id: 3,
      title: "Feeding Guide",
      icon: "👶",
      color: "#fce4ec"
    },
    {
      id: 4,
      title: "Growth",
      icon: "📈",
      color: "#f3e5f5"
    }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="quick-access-section">
      <h2>Quick Access</h2>
      <div className="grid-container">
        {displayItems.map((item) => (
          <div 
            key={item.id} 
            className="grid-item"
            style={{ backgroundColor: item.color }}
          >
            <div className="grid-icon">{item.icon}</div>
            <p className="grid-label">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
