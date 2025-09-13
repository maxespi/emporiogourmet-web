# Emporio Gourmet Chile

Sitio web oficial de Emporio Gourmet Chile - Experiencias culinarias excepcionales y organización de eventos.

## 🌐 Sitio Web

**Producción:** [emporiogourmetchile.cl](https://emporiogourmetchile.cl)

## 🛠 Tecnologías

- **React 19** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de build y desarrollo
- **Tailwind CSS 4** - Framework de CSS utilitario
- **Lucide React** - Iconos SVG optimizados

## 🚀 Desarrollo Local

### Prerrequisitos

- Node.js 20 o superior
- npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/emporiogourmet-web.git
cd emporiogourmet-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot reload

# Build
npm run build        # Compilar para producción
npm run preview      # Vista previa del build de producción

# Linting
npm run lint         # Ejecutar ESLint
```

## 🏗 Arquitectura del Proyecto

```
src/
├── components/      # Componentes React reutilizables
├── pages/          # Páginas principales
├── styles/         # Estilos globales y configuración de Tailwind
├── assets/         # Imágenes, iconos y archivos estáticos
├── utils/          # Funciones utilitarias
└── types/          # Definiciones de tipos TypeScript
```

## 🚀 Deployment

### Deployment Automático

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`. El workflow incluye:

- Build automático con Vite
- Optimización de assets
- Deploy a GitHub Pages
- Integración con Cloudflare CDN

### Configuración de Dominio

- **GitHub Pages**: Configurado para dominio personalizado
- **Cloudflare**: DNS y CDN configurados para `emporiogourmetchile.cl`
- **SSL**: Certificado automático a través de Cloudflare

## 🎨 Estilos y Diseño

- **Tailwind CSS 4**: Framework de CSS utilitario para diseño responsivo
- **Diseño Mobile-First**: Optimizado para dispositivos móviles
- **Sistema de Colores**: Paleta corporativa consistente
- **Componentes Modulares**: Arquitectura escalable y mantenible

## 📱 Funcionalidades

- Catálogo de productos gourmet
- Información sobre servicios de catering
- Organización de eventos corporativos y privados
- Galería de experiencias culinarias
- Formulario de contacto y cotizaciones
- Integración con redes sociales

## 🔧 Configuración de ESLint

El proyecto incluye configuración estricta de ESLint con:

- TypeScript ESLint rules
- React Hooks rules
- React Refresh rules
- Configuración para desarrollo y producción

## 📦 Build de Producción

```bash
npm run build
```

Genera una carpeta `dist/` optimizada con:
- Minificación de JavaScript y CSS
- Code splitting automático
- Optimización de imágenes
- Source maps para debugging

## 🌍 SEO y Performance

- **Meta tags** optimizados para SEO
- **Open Graph** para redes sociales
- **Lazy loading** de imágenes
- **Code splitting** para carga rápida
- **CDN** de Cloudflare para distribución global

## 📞 Contacto

Para consultas técnicas sobre el proyecto, contactar al equipo de desarrollo.

---

**Emporio Gourmet Chile** - Transformando momentos en experiencias culinarias inolvidables.
