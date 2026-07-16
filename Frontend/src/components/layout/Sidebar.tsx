export default function Sidebar() {
  const menus = [
    "Dashboard",
    "Lead Analysis",
    "Proposal",
    "Email",
    "History",
    "Settings",
  ];

  return (
    <aside
      style={{
        width: "240px",
        background: "#1f2937",
        color: "white",
        minHeight: "calc(100vh - 70px)",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      {menus.map((menu) => (
        <div
          key={menu}
          style={{
            padding: "12px 0",
            cursor: "pointer",
            borderBottom: "1px solid #374151",
          }}
        >
          {menu}
        </div>
      ))}
    </aside>
  );
}