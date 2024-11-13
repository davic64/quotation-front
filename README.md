# Quotation - Quotation Management System

A web-based system for creating, managing, and tracking client quotations with ease.

## 🚀 Key Features

- 📋 Create and manage quotes
- 👥 Client management
- 📊 Analytics dashboard
- 📅 Quote tracking system
- 📑 PDF generation
- 🌙 Dark/Light mode
- 📱 Responsive design

## 🛠️ Tech Stack

- React + TypeScript
- Vite
- React Query
- React Router DOM
- Shadcn/ui
- Axios
- PDFKit (PDF generation)

## 📁 Project Structure

```
src/
├── features/              # Main modules
│   ├── auth/             # Authentication
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── services/
│   │
│   ├── dashboard/        # Dashboard
│   ├── clients/          # Client management
│   ├── quotes/           # Quote management
│   └── settings/         # Settings
│
├── hooks/                # Global hooks
├── components/           # Shared components
│   ├── ui/              # UI components
│   └── shared/          # Common components
├── layouts/             # Application layouts
├── lib/                 # Utilities
├── providers/           # Context providers
└── routes/              # Route config
```

## 🚀 Getting Started

1. Clone and Install

```bash
git clone https://github.com/davic64/quotation-front.git
cd quotation
npm install
```

2. Environment Setup

```bash
# .env
VITE_API_URL=http://localhost:5000/api
```

3. Start Development Server

```bash
npm run dev
```

## 📝 Available Scripts

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 💻 Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

## 📱 Pages

### Dashboard (/)

- Overview metrics
- Recent quotes
- Quick actions

### Clients (/clients)

- Client list
- Create/Edit forms
- Client details

### Quotes (/quotes)

- Quote management
- Status tracking
- PDF generation

### Settings (/settings)

- User preferences
- Company details
- Quote settings

## 🔄 State Management

- React Query for server state
- Context for UI state
- Local storage for preferences

## 🎯 Future Improvements

- [ ] Telegram integration
- [ ] Stripe integration

---

Built with ❤️ using React + TypeScript
