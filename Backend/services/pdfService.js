const PDFDocument = require("pdfkit");

const generateProposalPDF = (proposal) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      margin: 40,
      size: "A4",
    });

    const buffers = [];

    doc.on("data", (chunk) => buffers.push(chunk));

    doc.on("end", () => {
      resolve(Buffer.concat(buffers));
    });

    doc.on("error", reject);

    doc
      .fontSize(22)
      .fillColor("#2563eb")
      .text("AgencyOS AI", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(16)
      .fillColor("black")
      .text("AI Generated Proposal", {
        align: "center",
      });

    doc.moveDown(2);

    doc
      .fontSize(11)
      .text(proposal, {
        align: "left",
      });

    doc.end();
  });
};

module.exports = {
  generateProposalPDF,
};