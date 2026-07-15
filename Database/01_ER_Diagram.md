# Entity Relationship Diagram (ER Diagram)

---

# Purpose

This document defines the database entities and their relationships for the LeadPilot AI Hackathon MVP.

The database is designed to support user management, lead management, AI analysis, proposal generation, email generation, approvals, and activity tracking.

---

# Database Overview

Main Entities

1. Users
2. Companies
3. Leads
4. AI Analysis
5. Proposals
6. Emails
7. Activity Logs

---

# Entity Relationship

```
Users
   │
   ├──────────────┐
   │              │
Companies      ActivityLogs
   │
   │
Leads
   │
   ├──────────────┐
   │              │
AI_Analysis   Proposals
                    │
                    │
                 Emails
```

---

# Entity Description

## 1. Users

Stores registered users.

Primary Key

- UserID

Relationship

- One User belongs to one Company.
- One User can perform many activities.

---

## 2. Companies

Stores company information.

Primary Key

- CompanyID

Relationship

- One Company has many Users.
- One Company has many Leads.

---

## 3. Leads

Stores all client inquiries.

Primary Key

- LeadID

Foreign Keys

- CompanyID

Relationship

- One Lead has one AI Analysis.
- One Lead can have multiple Proposals.

---

## 4. AI Analysis

Stores AI-generated lead analysis.

Primary Key

- AnalysisID

Foreign Key

- LeadID

Relationship

- One Analysis belongs to one Lead.

---

## 5. Proposals

Stores AI-generated proposals.

Primary Key

- ProposalID

Foreign Key

- LeadID

Relationship

- One Proposal can generate multiple Emails.

---

## 6. Emails

Stores follow-up emails.

Primary Key

- EmailID

Foreign Key

- ProposalID

Relationship

- One Email belongs to one Proposal.

---

## 7. Activity Logs

Stores every activity performed by users or AI.

Primary Key

- ActivityID

Foreign Key

- UserID

Examples

- Lead Created
- Lead Updated
- AI Analysis Completed
- Proposal Generated
- Proposal Approved
- Email Generated
- Email Sent

---

# Summary

Total Entities

- Users
- Companies
- Leads
- AI Analysis
- Proposals
- Emails
- Activity Logs

This ER design forms the foundation of the LeadPilot AI database and can be expanded later for the full AgencyOS AI SaaS platform with additional modules such as CRM, Billing, Teams, Integrations, AI Agents, and Subscription Management.