# 1. Crear proyecto
npm create vite@latest nubup-web -- --template react-ts
cd nubup-web

# 2. Instalar dependencias
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Git y GitHub
git init
git add .
git commit -m "Initial commit: Emporio Gourmet Chile web application setup"
git remote add origin https://github.com/tu-usuario/nubup-web.git
git branch -M main
git push -u origin main

# 4. Ejecutar localmente
npm run dev
