# Frontend Project Structure

---

# Purpose

This document defines the frontend folder structure for the AgencyOS AI Hackathon MVP.

The project is built using React and Next.js with a modular, scalable architecture.

---

# Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- React Hook Form
- React Query (Future)
- Zustand (Future)

---

# Folder Structure

src/

├── app/

├── components/

├── layouts/

├── pages/

├── hooks/

├── services/

├── lib/

├── store/

├── utils/

├── types/

├── assets/

├── styles/

└── constants/

---

# Folder Responsibilities

## app/

Contains application routes (Next.js App Router).

---

## components/

Reusable UI components.

Examples:

- Button
- Card
- Modal
- Table
- Sidebar
- Navbar

---

## layouts/

Application layouts.

Examples:

- Dashboard Layout
- Authentication Layout

---

## pages/

Main application pages.

Examples:

- Dashboard
- Leads
- Proposal
- Settings

---

## hooks/

Custom React Hooks.

Examples:

- useAuth
- useLead
- useProposal

---

## services/

API communication.

Examples:

- AuthService
- LeadService
- AIService

---

## store/

Global state management.

Examples:

- User Store
- Lead Store
- Dashboard Store

---

## utils/

Helper functions.

---

## types/

TypeScript interfaces.

---

## assets/

Images, icons, logos.

---

## styles/

Global styles.

---

# Goals

The frontend should be:

- Modular
- Responsive
- Fast
- Easy to maintain
- Easy to scale