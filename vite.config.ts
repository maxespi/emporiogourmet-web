import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: '/', // Para AWS con dominio propio
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Usar esbuild en lugar de terser
    // Optimizaciones adicionales para AWS
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          lucide: ['lucide-react']
        },
        // Nombres consistentes para mejor caching en CloudFront
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Tamaño de chunk optimizado
    chunkSizeWarningLimit: 1000
  },
  // Headers para desarrollo
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=86400'
    }
  }
})
