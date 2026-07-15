# API Specification

---

# Authentication APIs

## POST /api/auth/register

Purpose:
Register a new user.

Request

{
  "name":"",
  "email":"",
  "password":"",
  "company":""
}

Response

{
  "status":"success",
  "user_id":1
}

---

## POST /api/auth/login

Purpose:
User Login

Request

{
  "email":"",
  "password":""
}

Response

{
  "token":"JWT_TOKEN",
  "user":{}
}

---

# Lead APIs

## GET /api/leads

Purpose

Return all leads.

---

## POST /api/leads

Purpose

Create new lead.

---

## GET /api/leads/{id}

Purpose

View lead details.

---

## PUT /api/leads/{id}

Purpose

Update lead.

---

## DELETE /api/leads/{id}

Purpose

Delete lead.

---

# AI APIs

## POST /api/ai/analyze

Purpose

Analyze lead.

---

## POST /api/ai/score

Purpose

Generate lead score.

---

## POST /api/ai/risk

Purpose

Generate project risk analysis.

---

# Proposal APIs

## POST /api/proposal/generate

Generate Proposal

---

## GET /api/proposal/{id}

Proposal Details

---

## PUT /api/proposal/{id}

Update Proposal

---

## POST /api/proposal/export

Export PDF

---

# Email APIs

## POST /api/email/generate

Generate Email

---

## POST /api/email/send

Send Email

---

# Dashboard APIs

## GET /api/dashboard

Dashboard Summary

Returns

- Total Leads
- Hot Leads
- Warm Leads
- Cold Leads
- Today's Leads
- Pending Proposals
- AI Notifications

---

# Activity APIs

## GET /api/activity

Return Activity History

---

# Settings APIs

## GET /api/profile

User Profile

---

## PUT /api/profile

Update Profile

---

## GET /api/settings

Application Settings

---

## PUT /api/settings

Save Settings