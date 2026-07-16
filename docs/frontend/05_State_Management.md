# State Management

---

# Purpose

This document defines how application data is managed and shared across the AgencyOS AI frontend.

The goal is to keep the application predictable, maintainable, and scalable.

---

# State Management Technology

## Hackathon MVP

- React Context API
- useState
- useReducer

---

## Future SaaS

- Zustand
- TanStack Query (React Query)
- Context API

---

# Global States

## Authentication

Stores

- User
- Access Token
- Login Status
- User Role

---

## Dashboard

Stores

- Total Leads
- Hot Leads
- Warm Leads
- Cold Leads
- Today's Leads
- Pending Proposals
- AI Notifications

---

## Lead State

Stores

- Lead List
- Selected Lead
- Filters
- Search Keyword
- Pagination

---

## AI Analysis State

Stores

- Business Summary
- Feature Analysis
- Lead Score
- Risk Analysis
- AI Recommendation
- Confidence Score

---

## Proposal State

Stores

- Proposal Content
- Proposal Status
- PDF URL
- Approval Status

---

## Email State

Stores

- Subject
- Email Body
- Approval Status
- Send Status

---

## Settings State

Stores

- User Profile
- Company Information
- AI Preferences
- Notification Preferences

---

# Local Component State

Examples

- Modal Open
- Form Input
- Loading Spinner
- Validation Errors

---

# State Update Flow

User Action

↓

Frontend Component

↓

Update State

↓

API Request

↓

Receive Response

↓

Update Global State

↓

Refresh UI

---

# Best Practices

- Keep global state minimal.
- Keep temporary UI state local.
- Avoid duplicate data.
- Reset state after logout.
- Cache dashboard data where appropriate.

---

# Future Improvements

- Offline support
- Optimistic UI updates
- Background data synchronization
- Persistent user preferences