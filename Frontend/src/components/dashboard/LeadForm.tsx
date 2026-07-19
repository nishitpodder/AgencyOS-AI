"use client";

import { useState } from "react";
import axios from "axios";
const API = process.env.NEXT_PUBLIC_API_URL;

export default function LeadForm() {
  const [form, setForm] = useState({
    clientName: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    requirements: "",
  });

  const [result, setResult] = useState<any>(null);
const [loading, setLoading] = useState(false);

const [proposal, setProposal] = useState("");
const [emailContent, setEmailContent] = useState("");
const handleGenerateEmail = async () => {
  if (!proposal) return;

  setEmailLoading(true);

  try {
    const response = await axios.post(
      `${API}/api/email/generate`,
      {
        lead: form,
        analysis: result,
        proposal,
      }
    );

    console.log(response.data);
    console.log(response.data.email);

    setEmailContent(response.data.email);
  } catch (error: any) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to generate email."
    );
  } finally {
    setEmailLoading(false);
  }
};
const handleDownloadPDF = async () => {
  if (!proposal) return;

  try {
    const response = await axios.post(
      `${API}/api/pdf/generate`,
      {
        proposal,
      },
      {
        responseType: "blob",
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );

    const link = document.createElement("a");
    link.href = url;
    link.download = `${form.company || "AgencyOS"}-Proposal.pdf`;

    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error(error);
    alert("Failed to download PDF.");
  }
};
const [proposalLoading, setProposalLoading] = useState(false);
const [emailLoading, setEmailLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setResult(null);

  try {
    const response = await axios.post(
      `${API}/api/leads/analyze`,
      form
    );

    setResult(response.data.result);
  } catch (error: any) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};

// <-- Move it here
const handleGenerateProposal = async () => {
  if (!result) return;

  setProposalLoading(true);

  try {
    const response = await axios.post(
      `${API}/api/proposal/generate`,
      {
        lead: form,
        analysis: result,
      }
    );

    setProposal(response.data.proposal);
    console.log(response.data);
console.log(response.data.proposal);
  } catch (error: any) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to generate proposal." 
    )
  } finally {
    setProposalLoading(false);
  }
};

  const badgeColor = (value: string) => {
    switch (value?.toLowerCase()) {
      case "high":
        return "#16a34a";
      case "medium":
        return "#f59e0b";
      case "low":
        return "#dc2626";
      case "good":
        return "#16a34a";
      case "poor":
        return "#dc2626";
      default:
        return "#2563eb";
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "30px auto",
        background: "#111827",
        padding: "30px",
        borderRadius: "15px",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        🚀 LeadPilot AI
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        <input
          name="clientName"
          placeholder="Client Name"
          value={form.clientName}
          onChange={handleChange}
          style={{
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "#1f2937",
    color: "#fff",
  }}
        />

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          style={{
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "#1f2937",
    color: "#fff",
  }}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "#1f2937",
    color: "#fff",
  }}
        />

        <select
        style={{
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #374151",
  background: "#1f2937",
  color: "#fff",
}}
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
        >
          <option value="">Select Project</option>
          <option>Website</option>
          <option>Mobile App</option>
          <option>AI Automation</option>
          <option>CRM</option>
        </select>

        <input
          name="budget"
          placeholder="Budget"
          value={form.budget}
          onChange={handleChange}
          style={{
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #374151",
    background: "#1f2937",
    color: "#fff",
  }}
        />

        <textarea
        
          rows={5}
          name="requirements"
          placeholder="Project Requirements"
          value={form.requirements}
          onChange={handleChange}
          style={{
            gridColumn: "1 / span 2",
            
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            gridColumn: "1 / span 2",
            padding: "15px",
            fontSize: "18px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Lead"}
        </button>
      </form>

      {result && (
        <>
          <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "40px",
    marginBottom: "20px",
  }}
>
  <h2 style={{ margin: 0 }}>AI Lead Analysis</h2>

  <button
    type="button"
    onClick={handleGenerateProposal}
    disabled={proposalLoading}
    style={{
      padding: "10px 18px",
      background: "#16a34a",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    {proposalLoading ? "Generating..." : "Generate Proposal"}
  </button>

  <button
    type="button"
    onClick={handleGenerateEmail}
    disabled={emailLoading || !proposal}
    style={{
      padding: "10px 18px",
      background: "#9333ea",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    {emailLoading ? "Generating..." : "Generate Email"}
  </button>
</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Lead Score</h3>

              <div
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                  color: "#22c55e",
                }}
              >
                {result.leadScore}
              </div>
            </div>

            <div
              style={{
                background: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Priority</h3>

              <span
                style={{
                  background: badgeColor(result.priority),
                  padding: "8px 18px",
                  borderRadius: "20px",
                }}
              >
                {result.priority}
              </span>
            </div>

            <div
              style={{
                background: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Risk</h3>

              <span
                style={{
                  background: badgeColor(result.risk),
                  padding: "8px 18px",
                  borderRadius: "20px",
                }}
              >
                {result.risk}
              </span>
            </div>

            <div
              style={{
                background: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Budget Fit</h3>

              <span
                style={{
                  background: badgeColor(result.budgetFit),
                  padding: "8px 18px",
                  borderRadius: "20px",
                }}
              >
                {result.budgetFit}
              </span>
            </div>

            <div
              style={{
                background: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Estimated Value</h3>

              <h2>{result.estimatedValue}</h2>
            </div>

            <div
              style={{
                background: "#1f2937",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Recommendation</h3>

              <p>{result.recommendation}</p>
            </div>
          </div>

          <div
  style={{
    marginTop: "20px",
    background: "#1f2937",
    padding: "20px",
    borderRadius: "12px",
  }}
>
  <h3>Summary</h3>

  <p
    style={{
      lineHeight: 1.8,
    }}
  >
    {result.summary}
  </p>
</div>

{proposal && (
  <div
    style={{
      marginTop: "20px",
      background: "#1f2937",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h3>Generated Proposal</h3>
    <div
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  }}
>
  <button
    type="button"
    onClick={handleDownloadPDF}
    style={{
      padding: "10px 18px",
      background: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    📄 Download PDF
  </button>

  <button
    type="button"
    onClick={() => {
      navigator.clipboard.writeText(proposal);
      alert("Proposal copied!");
    }}
    style={{
      padding: "10px 18px",
      background: "#16a34a",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    📋 Copy Proposal
  </button>
</div>
    <pre
      style={{
        whiteSpace: "pre-wrap",
        color: "#fff",
      }}
    >
      {proposal}
    </pre>
  </div>
)}

{emailContent && (
  <div
    style={{
      marginTop: "20px",
      background: "#1f2937",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h3>Generated Sales Email</h3>
<button
  type="button"
  onClick={() => {
    navigator.clipboard.writeText(emailContent);
    alert("Email copied!");
  }}
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    padding: "10px 18px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  📋 Copy Email
</button>
    <pre
      style={{
        whiteSpace: "pre-wrap",
        color: "#fff",
      }}
    >
      {emailContent}
    </pre>
  </div>
)}
        </>
      )}
    </div>
  );
}