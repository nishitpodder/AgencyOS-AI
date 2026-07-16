"use client";

import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import LeadForm from "../../components/dashboard/LeadForm";

export default function LeadAnalysisPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 70px)",
          background: "#0b1220",
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
          <h1>Lead Analysis</h1>

          <LeadForm />
        </main>
      </div>
    </>
  );
}