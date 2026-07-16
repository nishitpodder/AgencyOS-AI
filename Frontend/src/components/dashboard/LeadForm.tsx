"use client";

import { useState } from "react";
import axios from "axios";

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

    try {
      const response = await axios.post(
        "http://localhost:5000/api/leads/analyze",
        form
      );

      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#1b2746",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2>Lead Analysis Form</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <input
          name="clientName"
          placeholder="Client Name"
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <select
          name="projectType"
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
          onChange={handleChange}
        />

        <textarea
          rows={5}
          name="requirements"
          placeholder="Project Requirements"
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            background: "#00aaff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Analyze Lead"}
        </button>
      </form>

      {result && (
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            background: "#0b1220",
            borderRadius: "10px",
          }}
        >
          <h3>AI Response</h3>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              color: "#00ff99",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}