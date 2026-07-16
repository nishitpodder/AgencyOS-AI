import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import DashboardCard from "../../components/dashboard/DashboardCard";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          background: "#0b1220",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "30px",
            color: "white",
          }}
        >
          <h1>LeadPilot AI Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <DashboardCard title="Total Leads" value={25} />
            <DashboardCard title="Hot Leads" value={8} />
            <DashboardCard title="Proposals" value={14} />
            <DashboardCard title="AI Score" value="92%" />
          </div>
        </main>
      </div>
    </>
  );
}