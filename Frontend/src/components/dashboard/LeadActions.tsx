type LeadActionsProps = {
  generatingProposal: boolean;
  generatingEmail: boolean;
  onGenerateProposal: () => void;
  onGenerateEmail: () => void;
};

export default function LeadActions({
  generatingProposal,
  generatingEmail,
  onGenerateProposal,
  onGenerateEmail,
}: LeadActionsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px",
        marginBottom: "20px",
      }}
    >
      <button
        onClick={onGenerateProposal}
        disabled={generatingProposal}
        style={{
          flex: 1,
          padding: "15px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {generatingProposal
          ? "Generating Proposal..."
          : "📄 Generate Proposal"}
      </button>

      <button
        onClick={onGenerateEmail}
        disabled={generatingEmail}
        style={{
          flex: 1,
          padding: "15px",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {generatingEmail
          ? "Generating Email..."
          : "📧 Generate Email"}
      </button>
    </div>
  );
}