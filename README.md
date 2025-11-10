# BudayaConnect Frontend

Platform budaya Indonesia yang menghubungkan warisan budaya dengan generasi masa kini.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** dengan TypeScript
- **Vite** sebagai build tool
- **React Router v6** untuk routing
- **TanStack Query** untuk server state management
- **Tailwind CSS** untuk styling
- **Headless UI** untuk accessible components
- **Framer Motion** untuk animations

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── atoms/           # Button, Input, Icon, etc.
│   ├── molecules/      # Card, SearchBox, etc.
│   ├── organisms/       # Header, Sidebar, etc.
│   └── templates/       # PageLayout, AuthLayout, etc.
├── pages/               # Page components
│   ├── Home/
│   ├── CultureDirectory/
│   ├── Map/
│   ├── Events/
│   ├── Community/
│   └── Profile/
├── hooks/               # Custom hooks
├── context/             # React Context providers
├── services/            # API calls & external services
├── utils/               # Helper functions
├── styles/              # Global styles, themes
├── assets/              # Images, icons, fonts
├── types/               # TypeScript type definitions
└── constants/           # App constants
```

## 🎨 Features

- **Direktori Budaya**: Jelajahi berbagai warisan budaya Indonesia
- **Peta Interaktif**: Temukan lokasi budaya secara geografis
- **Event & Festival**: Informasi acara budaya terkini
- **Komunitas**: Terhubung dengan pecinta budaya
- **Profil Pengguna**: Kelola kontribusi dan aktivitas

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📱 Responsive Design

Aplikasi ini dirancang dengan mobile-first approach dan sepenuhnya responsive untuk:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🧪 Testing

Testing setup menggunakan:
- **Vitest** untuk unit testing
- **React Testing Library** untuk component testing
- **Playwright** untuk E2E testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

## 🚀 Deployment

Aplikasi siap untuk di-deploy ke:
- **Vercel** (recommended)
- **Netlify**
- **Static hosting services**

## 📄 License

MIT License - see LICENSE file for details.
