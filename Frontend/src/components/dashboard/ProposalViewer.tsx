type ProposalViewerProps = {
  proposal: string;
};

export default function ProposalViewer({
  proposal,
}: ProposalViewerProps) {
  if (!proposal) return null;

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#111827",
        borderRadius: "12px",
        padding: "25px",
        color: "#fff",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        📄 AI Generated Proposal
      </h2>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          lineHeight: 1.8,
          fontSize: "15px",
        }}
      >
        {proposal}
      </pre>
    </div>
  );
}