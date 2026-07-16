type DashboardCardProps = {
  title: string;
  value: string | number;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div
      style={{
        background: "#16213e",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "220px",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}