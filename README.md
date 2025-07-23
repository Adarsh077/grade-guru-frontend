# Grade Guru - Frontend

A comprehensive Grade Management System frontend built with React, designed to streamline academic administration for educational institutions. This application provides an intuitive interface for managing students, subjects, departments, and academic records.

## 🌟 Features

### 📚 Academic Management

- **Department Management**: Create, update, and manage academic departments
- **Semester Organization**: Organize courses by semesters with batch tracking
- **Subject Management**: Comprehensive subject and subject group administration
- **Student Records**: Maintain detailed student information and academic history

### 👥 User Management

- **Role-Based Access Control**: Secure authentication with CASL-based permissions
- **Multi-User Support**: Different access levels for administrators, faculty, and staff
- **User Registration**: Streamlined user onboarding process

### 📊 Grade Management

- **Marks Entry**: Efficient grade entry and management system
- **Subject-wise Reports**: Detailed academic performance tracking
- **Bulk Operations**: Excel import/export functionality for efficient data management
- **Result Generation**: Automated result compilation and PDF generation

### 🎨 Modern UI/UX

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Custom UI components built with Radix UI
- **Interactive Tables**: Advanced data grid with sorting and filtering

## 🛠️ Tech Stack

### Frontend Framework

- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and development server

### State Management

- **Redux Toolkit** - Predictable state container

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **Lucide React** - Beautiful & consistent icons

### Form Handling & Validation

- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema declaration and validation

### Data Processing

- **Axios** - Promise-based HTTP client
- **React Data Grid** - High-performance data tables
- **Read/Write Excel File** - Excel file processing capabilities

### Authentication & Authorization

- **CASL** - Isomorphic authorization JavaScript library

### Desktop App

- **Electron** - Cross-platform desktop application support

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Adarsh077/grade-guru-frontend.git
   cd grade-guru-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Configure your API endpoint and other environment variables
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run electron:dev` - Start Electron desktop app

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   └── ...             # Feature-specific components
├── constants/          # Application constants and enums
├── features/           # Feature-based components
├── hooks/              # Custom React hooks
├── layouts/            # Page layout components
├── pages/              # Application pages/routes
├── routes/             # Routing configuration
├── services/           # API service layer
├── store/              # Redux store and slices
└── utils.js            # Utility functions
```

## 🔗 Related Repositories

### Backend Repository

**[Grade Guru Backend](https://github.com/Adarsh077/grade-guru-backend)**

- RESTful API built with Node.js and Express
- MongoDB database with Mongoose ODM
- JWT-based authentication
- Comprehensive API documentation

## 🌐 Deployment

### Production Build

```bash
npm run build
```

### Desktop Application

```bash
npm run electron:dev
```
