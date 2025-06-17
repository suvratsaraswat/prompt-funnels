#!/bin/bash

# Exit on any error
set -e

# --- Create React App with Vite + TypeScript ---
echo "Creating Vite + React + TypeScript app..."
npm create vite@latest frontend -- --template react-ts
cd frontend

# --- Initialize Git repo if not already done ---
git init

# --- Install dependencies ---
echo "Installing main dependencies..."
npm install

echo "Installing TailwindCSS and PostCSS dependencies..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo "Installing Router, Axios, Redux Toolkit..."
npm install react-router-dom axios @reduxjs/toolkit react-redux
npm install -D @types/react-router-dom

echo "Installing Toastify and clsx (optional)..."
npm install react-toastify clsx

# --- Configure Tailwind ---
echo "Configuring Tailwind..."
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# --- Setup index.css ---
echo "Setting up Tailwind directives in index.css..."
cat > src/index.css << EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# --- Create Basic Folder Structure ---
echo "Creating basic folders and files..."

mkdir -p src/components/common
mkdir -p src/components/funnel
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/services
mkdir -p src/store
mkdir -p src/utils

# --- Sample Pages ---
cat > src/pages/Home.tsx << EOL
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Prompt Funnels</h1>
      <Link to="/create" className="text-blue-500 underline">
        Create a New Funnel
      </Link>
    </div>
  );
}
EOL

cat > src/pages/CreateFunnel.tsx << EOL
import { useState } from 'react';
import api from '../services/axios';

export default function CreateFunnel() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/funnel', { prompt });
      console.log('Funnel created:', response.data);
    } catch (error) {
      console.error('Error creating funnel:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-6">Create Funnel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full border rounded p-2"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate Funnel
        </button>
      </form>
    </div>
  );
}
EOL

cat > src/pages/FunnelDetails.tsx << EOL
import { useParams } from 'react-router-dom';

export default function FunnelDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">Funnel Details</h1>
      <p>Funnel ID: {id}</p>
    </div>
  );
}
EOL

# --- Basic Router Setup ---
cat > src/App.tsx << EOL
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateFunnel from './pages/CreateFunnel';
import FunnelDetails from './pages/FunnelDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateFunnel />} />
        <Route path="/funnel/:id" element={<FunnelDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
EOL

# --- Axios Service Setup ---
cat > src/services/axios.ts << EOL
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this URL if your backend runs somewhere else
});

export default api;
EOL

# --- Initial Git Commit ---
git add .
git commit -m "Initial frontend setup for Prompt Funnels 🚀"

# --- Final Message ---
echo "Frontend scaffolding is complete! 🎉"
echo "Run 'npm run dev' inside frontend/ to start the development server."
