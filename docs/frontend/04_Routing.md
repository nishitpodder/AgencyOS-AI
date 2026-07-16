# Frontend Routing

---

# Purpose

This document defines the routing structure of AgencyOS AI.

The application uses Next.js App Router with protected and public routes.

---

# Public Routes

## Home

Route

/

Purpose

Landing page for AgencyOS AI.

---

## Login

Route

/login

Purpose

User authentication.

---

## Register

Route

/register

Purpose

Create a new account.

---

## Forgot Password

Route

/forgot-password

Purpose

Reset account password.

---

# Protected Routes

The following routes require authentication.

---

## Dashboard

/dashboard

Displays:

- Statistics
- AI Notifications
- Recent Activities
- Quick Actions

---

## Leads

/leads

Displays:

- Lead List
- Search
- Filters
- Import
- Export

---

## Lead Details

/leads/[id]

Displays:

- Lead Information
- AI Analysis
- Proposal
- Emails
- Activity

---

## Proposal

/proposals/[id]

Displays:

- Proposal Preview
- Edit Proposal
- Download PDF
- Approval

---

## Email

/emails/[id]

Displays:

- Email Preview
- Email Editor
- Send Email

---

## Activity

/activity

Displays activity logs.

---

## Settings

/settings

Displays:

- Profile
- Company
- Notifications
- AI Preferences
- Security

---

# Navigation Structure

Dashboard

↓

Lead Management

↓

Lead Details

↓

AI Analysis

↓

Proposal

↓

Email

↓

Activity

---

# Route Protection

Public Routes

↓

Login Required?

↓

If YES

↓

Redirect to Login

↓

After Login

↓

Return to Requested Page

---

# Error Pages

404

Page Not Found

---

403

Access Denied

---

500

Internal Server Error

---

# Future SaaS Routes

/crm

/seo

/social

/content

/meeting

/finance

/hr

/analytics

/billing

/team

/settings/api

/settings/integrations