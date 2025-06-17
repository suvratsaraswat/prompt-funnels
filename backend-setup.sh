#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Setting up Backend..."

cd backend

npm init -y

npm install express cors dotenv openai mongoose
npm install -D typescript ts-node-dev @types/express @types/node nodemon

# Initialize TypeScript config
npx tsc --init

# Create folder structure
mkdir -p src/{routes,controllers,services,models,config}

# Create basic app.ts
cat <<EOF > src/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Prompt Funnels Backend is Running');
});

export default app;
EOF

# Create server.ts
cat <<EOF > src/server.ts
import app from './app';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
EOF

# Create nodemon.json
cat <<EOF > nodemon.json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node-dev src/server.ts"
}
EOF

# Basic .env file
cat <<EOF > .env
PORT=4000
OPENAI_API_KEY=your_openai_api_key_here
MONGO_URI=your_mongodb_uri_here
EOF

echo "✅ Backend setup complete!"
echo "👉 Next Step: cd backend && npm run dev"

