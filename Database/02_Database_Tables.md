# Database Tables

---

# Purpose

This document defines all database tables required for the LeadPilot AI Hackathon MVP.

Each table includes its columns, data types, primary keys, foreign keys, and descriptions.

---

# Table 1: Users

| Column | Data Type | Description |
|---------|-----------|-------------|
| UserID | UUID | Primary Key |
| FullName | VARCHAR(150) | User Full Name |
| Email | VARCHAR(255) | Login Email |
| Password | VARCHAR(255) | Encrypted Password |
| Phone | VARCHAR(20) | Mobile Number |
| CompanyID | UUID | Foreign Key |
| Role | VARCHAR(50) | Admin/User |
| CreatedAt | TIMESTAMP | Account Created |
| UpdatedAt | TIMESTAMP | Last Updated |

---

# Table 2: Companies

| Column | Data Type | Description |
|---------|-----------|-------------|
| CompanyID | UUID | Primary Key |
| CompanyName | VARCHAR(200) | Company Name |
| Industry | VARCHAR(100) | Business Industry |
| Website | VARCHAR(255) | Company Website |
| Address | TEXT | Company Address |
| CreatedAt | TIMESTAMP | Created Date |

---

# Table 3: Leads

| Column | Data Type | Description |
|---------|-----------|-------------|
| LeadID | UUID | Primary Key |
| CompanyID | UUID | Foreign Key |
| ClientName | VARCHAR(150) | Client Name |
| Email | VARCHAR(255) | Client Email |
| Phone | VARCHAR(20) | Phone Number |
| Industry | VARCHAR(100) | Client Industry |
| Budget | DECIMAL | Project Budget |
| Timeline | VARCHAR(100) | Project Timeline |
| Features | TEXT | Required Features |
| Description | TEXT | Project Details |
| LeadScore | INTEGER | AI Score |
| Category | VARCHAR(20) | Hot/Warm/Cold |
| Status | VARCHAR(50) | Current Status |
| CreatedAt | TIMESTAMP | Created Date |

---

# Table 4: AI_Analysis

| Column | Data Type | Description |
|---------|-----------|-------------|
| AnalysisID | UUID | Primary Key |
| LeadID | UUID | Foreign Key |
| BusinessType | VARCHAR(100) | Business Category |
| Complexity | VARCHAR(50) | Low/Medium/High |
| RequirementClarity | INTEGER | Percentage |
| BudgetAnalysis | VARCHAR(50) | Good/Fair/Poor |
| RiskLevel | VARCHAR(50) | Low/Medium/High |
| OpportunityScore | INTEGER | AI Opportunity Score |
| Recommendation | TEXT | AI Recommendation |
| CreatedAt | TIMESTAMP | Analysis Date |

---

# Table 5: Proposals

| Column | Data Type | Description |
|---------|-----------|-------------|
| ProposalID | UUID | Primary Key |
| LeadID | UUID | Foreign Key |
| ProposalTitle | VARCHAR(255) | Proposal Name |
| Budget | DECIMAL | Estimated Budget |
| Timeline | VARCHAR(100) | Delivery Timeline |
| ProposalText | TEXT | Proposal Content |
| Status | VARCHAR(50) | Draft/Approved/Sent |
| CreatedAt | TIMESTAMP | Created Date |

---

# Table 6: Emails

| Column | Data Type | Description |
|---------|-----------|-------------|
| EmailID | UUID | Primary Key |
| ProposalID | UUID | Foreign Key |
| Recipient | VARCHAR(255) | Client Email |
| Subject | VARCHAR(255) | Email Subject |
| Body | TEXT | Email Content |
| Status | VARCHAR(50) | Draft/Sent |
| SentAt | TIMESTAMP | Email Sent Date |

---

# Table 7: ActivityLogs

| Column | Data Type | Description |
|---------|-----------|-------------|
| ActivityID | UUID | Primary Key |
| UserID | UUID | Foreign Key |
| ActivityType | VARCHAR(100) | Activity Name |
| Description | TEXT | Details |
| Status | VARCHAR(50) | Success/Failed |
| CreatedAt | TIMESTAMP | Activity Time |