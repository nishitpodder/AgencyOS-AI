# Folder Structure

---

# Purpose

This document defines the folder structure of the Laravel backend for AgencyOS AI.

The structure follows clean architecture principles to keep the application modular, scalable, and easy to maintain.

---

# Project Structure

app/

├── Http/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Requests/
│
├── Models/
│
├── Services/
│
├── Repositories/
│
├── Jobs/
│
├── Events/
│
├── Listeners/
│
├── Notifications/
│
├── Policies/
│
├── Traits/
│
└── Helpers/

---

# Folder Responsibilities

## Controllers

Purpose:

Receive API requests and return responses.

Example:

- AuthController
- LeadController
- ProposalController
- EmailController

---

## Models

Represent database tables.

Examples:

- User
- Company
- Lead
- Proposal
- Email
- ActivityLog

---

## Services

Contain business logic.

Examples:

- AIAnalysisService
- ProposalService
- EmailService
- PDFService
- LeadScoringService

---

## Repositories

Handle database operations.

Examples:

- LeadRepository
- ProposalRepository
- UserRepository

---

## Jobs

Execute long-running tasks in the background.

Examples:

- GenerateProposalJob
- AnalyzeLeadJob
- SendEmailJob

---

## Middleware

Protect API routes.

Examples:

- Authentication
- Role Check
- API Rate Limit

---

## Requests

Validate incoming data.

Examples:

- CreateLeadRequest
- LoginRequest
- RegisterRequest

---

## Notifications

Send system notifications.

Examples:

- Proposal Ready
- Email Sent
- AI Completed

---

## Policies

Control user permissions.

Examples:

- Lead Policy
- Proposal Policy

---

# Why This Structure?

Benefits:

- Easy to maintain
- Easy to test
- Modular development
- Supports future SaaS expansion
- Faster team collaboration

---

# Future Expansion

As AgencyOS AI grows, new modules can be added without restructuring the project.

Examples:

- CRM Module
- HR Module
- Marketing Module
- Finance Module
- Customer Support Module