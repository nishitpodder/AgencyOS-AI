# Background Jobs

---

# Purpose

Background jobs handle long-running tasks without blocking the user interface.

---

# Jobs

- Analyze Lead
- Generate Proposal
- Generate Email
- Export PDF
- Send Email
- AI Retry
- Activity Logging

---

# Workflow

User Action

↓

Queue Job

↓

Worker Processes Job

↓

Save Result

↓

Notify User

---

# Benefits

- Faster UI
- Better Performance
- Retry Failed Jobs
- Scalable Architecture