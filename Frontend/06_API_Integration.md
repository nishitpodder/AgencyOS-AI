# API Integration

---

# Purpose

This document defines how the frontend communicates with the Laravel backend APIs.

The frontend sends requests, receives responses, handles loading states, and displays results to the user.

---

# Base URL

Development

http://localhost:8000/api

Production

https://api.agencyos.ai/api

---

# Authentication API

## Register

POST

/api/auth/register

---

## Login

POST

/api/auth/login

---

## Logout

POST

/api/auth/logout

---

## Current User

GET

/api/auth/me

---

# Dashboard API

GET

/api/dashboard

Returns

- Total Leads
- Hot Leads
- Warm Leads
- Cold Leads
- Today's Leads
- Pending Proposals
- AI Notifications
- Recent Activities

---

# Lead APIs

GET /api/leads

Return all leads

---

POST /api/leads

Create Lead

---

GET /api/leads/{id}

Lead Details

---

PUT /api/leads/{id}

Update Lead

---

DELETE /api/leads/{id}

Delete Lead

---

# AI APIs

POST

/api/ai/analyze

Analyze Lead

---

POST

/api/ai/score

Generate Lead Score

---

POST

/api/ai/risk

Generate Risk Analysis

---

# Proposal APIs

POST

/api/proposal/generate

---

GET

/api/proposal/{id}

---

PUT

/api/proposal/{id}

---

POST

/api/proposal/export

Download PDF

---

# Email APIs

POST

/api/email/generate

---

POST

/api/email/send

---

# Activity API

GET

/api/activity

---

# Settings API

GET

/api/settings

---

PUT

/api/settings

---

# Request Flow

Frontend

↓

Axios Service

↓

Laravel API

↓

JSON Response

↓

Update State

↓

Update UI

---

# Loading States

Display loading indicators while:

- Login
- Lead Creation
- AI Analysis
- Proposal Generation
- Email Generation
- PDF Export

---

# Error Handling

Handle

- 400 Validation Error
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Server Error

Display user-friendly messages.

---

# Authentication

Use Bearer Token.

Store securely.

Automatically attach token to every authenticated request.

---

# Future SaaS

Future integrations:

- Stripe API
- Gmail API
- Outlook API
- Slack API
- WhatsApp API
- HubSpot API
- Salesforce API