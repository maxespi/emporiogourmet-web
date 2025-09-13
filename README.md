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
# Clonar el repositorio (privado)
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

## ☁️ Infraestructura AWS

### Stack de Deployment

- **S3 Bucket**: Hosting estático del sitio web
- **CloudFront**: CDN global para distribución de contenido
- **Route 53**: Gestión DNS para dominio personalizado
- **Certificate Manager**: Certificados SSL/TLS automáticos
- **CodePipeline** (opcional): CI/CD automático

### Configuración de AWS

#### S3 Bucket
- Bucket configurado para hosting estático
- Políticas de acceso público para contenido web
- Versionado activado para rollbacks

#### CloudFront
- Distribución global con edge locations
- Compresión automática (Gzip/Brotli)
- Caching optimizado para assets estáticos
- HTTPS forzado con certificado SSL

#### Dominio personalizado
- `emporiogourmetchile.cl` apuntando a CloudFront
- Certificado SSL válido y renovación automática
- Redirección www → apex domain

## 🚀 Deployment

### Deployment Manual
```bash
# Build del proyecto
npm run build

# Los archivos estáticos se generan en ./dist/
# Subir contenido de ./dist/ al bucket S3
aws s3 sync ./dist/ s3://tu-bucket-name --delete

# Invalidar caché de CloudFront
aws cloudfront create-invalidation --distribution-id XXXXXXXX --paths "/*"
```

### Deployment Automático (opcional)
Con AWS CodePipeline conectado al repositorio privado mediante:
- GitHub webhook o polling
- Build automático en CodeBuild
- Deploy a S3 + invalidación de CloudFront

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
- Assets con hash para cache busting

## 🌍 SEO y Performance

### Optimizaciones implementadas
- **Meta tags** optimizados para SEO
- **Open Graph** para redes sociales
- **Lazy loading** de imágenes
- **Code splitting** para carga rápida
- **Preload** de recursos críticos

### AWS Performance
- **CloudFront CDN** con 300+ edge locations globalmente
- **Compresión automática** de texto y assets
- **HTTP/2** y HTTP/3 habilitado
- **Cache headers** optimizados

## 🔒 Seguridad

- **HTTPS obligatorio** en todas las conexiones
- **Security headers** configurados en CloudFront
- **Repositorio privado** para proteger código fuente
- **Variables de entorno** separadas por ambiente

## 📊 Monitoreo

- **CloudWatch** para métricas de S3 y CloudFront
- **AWS Cost Explorer** para control de costos
- **CloudFront Analytics** para análisis de tráfico


---

**Emporio Gourmet Chile** - Transformando momentos en experiencias culinarias inolvidables.

*Sitio desarrollado con tecnologías modernas y desplegado en infraestructura AWS para máximo rendimiento y confiabilidad.*
