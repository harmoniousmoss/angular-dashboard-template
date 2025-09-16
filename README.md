# Angular Dashboard Template

A modern, clean dashboard template built with Angular 20 featuring a monochromatic slate design theme for fast wireframing.

## Features

### ✅ Completed
- **Main Dashboard** - Complete dashboard with stats cards, services overview, activity feed, and quick actions
- **Login Page** - Full login form with email/password authentication and navigation
- **Routing System** - Navigation between login and dashboard pages
- **Responsive Layout** - Horizontal navigation with company branding
- **User Interface** - User dropdown menu with profile options and logout functionality
- **Slate Theme** - Monochromatic wireframe design using slate colors
- **Typography** - Noto Sans font integration

### 🚧 In Progress
- **Profile Page** - Not yet implemented
- **Billing & Payment** - Not yet implemented
- **Register Page** - Not yet implemented
- **Forgot Password** - Not yet implemented

## Tech Stack

- **Angular** 20.3.0
- **TypeScript** 
- **Noto Sans** Font
- **Inline CSS** Styling (Slate color palette)
- **Standalone Components** Architecture

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd angular-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── dashboard/          # Main dashboard component
│   ├── login/             # Login component with form validation
│   ├── app.component.*    # Root component
│   └── app.routes.ts      # Application routes (login/dashboard)
├── styles.css             # Global styles with Noto Sans
└── index.html             # Main HTML template
```

## Design System

### Color Palette (Slate Theme)
- **Background**: `#f1f5f9` (slate-100)
- **Cards**: White with `#cbd5e1` (slate-300) borders
- **Primary Text**: `#334155` (slate-700)
- **Secondary Text**: `#64748b` (slate-500)
- **Accent Elements**: `#475569` (slate-600)

### Typography
- **Font Family**: Noto Sans (Google Fonts)
- **Weights**: 400, 500, 600, 700

## Development Progress

This README will be updated as new features are implemented. Current focus areas:

1. **Authentication System** - Register and Forgot Password pages (Login ✅ completed)
2. **Billing Module** - Payment processing and billing management
3. **State Management** - User session and data management
4. **Enhanced Security** - Form validation and authentication guards

## Contributing

This is a template project. Feel free to customize and extend based on your needs.

## License

MIT License
