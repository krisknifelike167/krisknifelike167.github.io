import achievements from "../data/achievements.json";
import useReveal from "../hooks/useReveal";
import "./Achievements.css";

const CATEGORY_LABELS = {
  academic: "Academic",
  research: "Research",
  competitions: "Competitions",
};

function groupByCategory(items) {
  return items.reduce((groups, item) => {
    const key = item.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});
}

function CategoryGroup({ category, items }) {
  const ref = useReveal();
  const label = CATEGORY_LABELS[category] || category;

  return (
    <div className="achievement-group reveal" ref={ref}>
      <h3 className="achievement-category">{label}</h3>
      <ul className="achievement-list">
        {items.map((item) => (
          <li key={item.title} className="achievement-item">
            <div className="achievement-item-head">
              <span className="achievement-title">{item.title}</span>
              <span className="achievement-date">{item.date}</span>
            </div>
            <p className="achievement-description">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Achievements() {
  const grouped = groupByCategory(achievements);
  const titleRef = useReveal();

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="reveal" ref={titleRef}>
          <p className="eyebrow">Recognition</p>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievement-groups">
          {Object.entries(grouped).map(([category, items]) => (
            <CategoryGroup key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
