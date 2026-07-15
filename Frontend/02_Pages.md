# Frontend Pages

---

# Purpose

This document defines all pages of the AgencyOS AI application.

The pages are divided into Hackathon MVP pages and Future SaaS pages.

---

# Hackathon MVP Pages

## 1. Login

Route

/login

Purpose

Allow registered users to securely log in.

Features

- Email
- Password
- Remember Me
- Forgot Password

---

## 2. Register

Route

/register

Purpose

Create a new agency account.

Features

- Full Name
- Company Name
- Email
- Password
- Confirm Password

---

## 3. Dashboard

Route

/dashboard

Purpose

Display an overview of agency activities.

Widgets

- Total Leads
- Hot Leads
- Warm Leads
- Cold Leads
- Today's New Leads
- Pending Proposals
- AI Notifications
- Recent Activities

Quick Actions

- Add Lead
- Analyze Lead
- Generate Proposal

---

## 4. Lead Management

Route

/leads

Purpose

Manage all client leads.

Features

- Create Lead
- Edit Lead
- Delete Lead
- Search
- Filter
- Import CSV
- Export CSV

---

## 5. Lead Details

Route

/leads/{id}

Purpose

Display complete lead information.

Tabs

- Overview
- AI Analysis
- Proposal
- Emails
- Activity History

---

## 6. AI Analysis

Route

/analysis/{id}

Purpose

Display AI-generated lead analysis.

Sections

- Business Summary
- Required Features
- Lead Score
- Risks
- AI Recommendation

---

## 7. Proposal Generator

Route

/proposals/{id}

Purpose

Review and approve AI-generated proposals.

Features

- Preview Proposal
- Edit Proposal
- Download PDF
- Approve

---

## 8. Email Generator

Route

/emails/{id}

Purpose

Review AI-generated emails.

Features

- Preview
- Edit
- Approve
- Send

---

## 9. Activity History

Route

/activity

Purpose

Display all user and AI activities.

Filters

- Date
- User
- Activity Type

---

## 10. Settings

Route

/settings

Purpose

Manage user and application settings.

Sections

- Profile
- Company Information
- Notification Preferences
- AI Preferences
- Security

---

# Future SaaS Pages

The following pages will be added after the Hackathon MVP.

## CRM Dashboard

## Team Management

## Subscription & Billing

## AI Marketplace

## SEO Dashboard

## Marketing Dashboard

## MeetingPilot AI

## ContentPilot AI

## SocialPilot AI

## Analytics Dashboard

## Reports

## Audit Logs

## Integrations

- Gmail
- Outlook
- Slack
- WhatsApp
- HubSpot
- Salesforce

---

# Design Principles

Every page should:

- Load quickly
- Be mobile responsive
- Use consistent navigation
- Provide clear actions
- Display loading and error states