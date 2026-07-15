# Table Relationships

---

# Purpose

This document defines how database tables are connected within the LeadPilot AI MVP.

A well-designed relationship model ensures data consistency, scalability, and easier future expansion.

---

# Relationships

## Company → Users

Relationship:

One Company → Many Users

Type:

One-to-Many (1:N)

Reason:

A company can have multiple employees using AgencyOS AI.

---

## User → Leads

Relationship:

One User → Many Leads

Type:

One-to-Many (1:N)

Reason:

A user can manage multiple client leads.

---

## Lead → AI Analysis

Relationship:

One Lead → One AI Analysis

Type:

One-to-One (1:1)

Reason:

Each lead has one latest AI analysis for the MVP.

(Future versions may support multiple analysis versions.)

---

## Lead → Proposals

Relationship:

One Lead → Many Proposals

Type:

One-to-Many (1:N)

Reason:

Clients may request multiple proposal revisions before approval.

---

## Proposal → Emails

Relationship:

One Proposal → Many Emails

Type:

One-to-Many (1:N)

Reason:

Multiple emails may be sent for the same proposal, including follow-ups and reminders.

---

## User → Activity Logs

Relationship:

One User → Many Activity Logs

Type:

One-to-Many (1:N)

Reason:

Every user action is recorded for audit and tracking purposes.

---

## Lead → Activity Logs

Relationship:

One Lead → Many Activity Logs

Type:

One-to-Many (1:N)

Reason:

Each lead maintains a complete history of activities such as AI analysis, proposal generation, approvals, and emails.

---

# Relationship Summary

- Company → Users (1:N)
- User → Leads (1:N)
- Lead → AI Analysis (1:1)
- Lead → Proposals (1:N)
- Proposal → Emails (1:N)
- User → Activity Logs (1:N)
- Lead → Activity Logs (1:N)