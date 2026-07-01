function AnalyticsCard({ title, value }) {
  return (
    <div style={{ padding: 20, border: "1px solid #ddd" }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default AnalyticsCard;