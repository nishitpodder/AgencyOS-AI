type EmailViewerProps = {
  email: string;
};

export default function EmailViewer({
  email,
}: EmailViewerProps) {
  if (!email) return null;

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
        📧 AI Generated Email
      </h2>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          lineHeight: 1.8,
          fontSize: "15px",
        }}
      >
        {email}
      </pre>
    </div>
  );
}