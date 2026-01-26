# Landing Page Swift DataWorks

Landing page para Swift DataWorks - Sistema de Facturación Electrónica

## 🚀 Tecnologías

- **React 18.3** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Framework de estilos
- **Radix UI** - Componentes UI accesibles
- **Lucide React** - Iconos

## 📋 Prerequisitos

- **Node.js 20.x** (recomendado: 20.19.5)
- **npm** o **pnpm**

Si usas `nvm`, el proyecto incluye un archivo `.nvmrc` que especifica la versión correcta de Node.js.

## 🛠️ Instalación

1. Asegúrate de usar la versión correcta de Node.js:
```bash
nvm use
```

2. Instala las dependencias:
```bash
npm install
```

## 💻 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto abrirá el proyecto en `http://localhost:5173/`

## 🏗️ Build

Para crear una versión de producción:

```bash
npm run build
```

Los archivos compilados estarán en el directorio `dist/`

## 👀 Preview

Para previsualizar la versión de producción:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
landing-page-swift/
├── public/               # Assets estáticos (logos, imágenes)
├── src/
│   ├── app/
│   │   ├── App.tsx      # Componente principal
│   │   └── components/  # Componentes de la landing page
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       ├── Benefits.tsx
│   │       ├── Pricing.tsx
│   │       ├── Contact.tsx
│   │       ├── Footer.tsx
│   │       └── ui/      # Componentes UI reutilizables (shadcn/ui)
│   ├── style/           # Estilos globales
│   └── main.tsx         # Punto de entrada
├── index.html           # HTML base
├── tsconfig.json        # Configuración TypeScript
└── vite.config.ts       # Configuración Vite
```

## 🎨 Personalización

### Colores

El proyecto usa los siguientes colores principales:
- **Azul primario**: `#0063F9`
- **Azul secundario**: `#00A3FF`
- **Azul claro**: `#4D9FFF`

Puedes modificarlos en los componentes según necesites.

### Logos

Los logos SVG están en `/public`:
- `logo-horizontal.svg` - Logo horizontal para el header
- `logo-symbol.svg` - Símbolo/ícono para el hero
- `logo-white.svg` - Logo blanco para el footer

Reemplázalos con tus propios logos manteniendo los mismos nombres de archivo.

## 📝 Secciones de la Landing Page

1. **Header** - Navegación fija con logo y menú
2. **Hero** - Sección principal con CTA
3. **Features** - Características del producto
4. **Benefits** - Beneficios para los usuarios
5. **Pricing** - Planes y precios
6. **Contact** - Formulario de contacto
7. **Footer** - Enlaces y redes sociales

## 🐛 Solución de Problemas

### Error: Cannot find module 'node:path'

Asegúrate de estar usando Node.js 20 o superior:
```bash
nvm use 20
```

### Errores de compilación TypeScript

Ejecuta el verificador de tipos:
```bash
npx tsc --noEmit
```

### El servidor de desarrollo no inicia

1. Borra `node_modules` y reinstala:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Verifica que estés en la versión correcta de Node.js:
```bash
node --version  # Debe ser v20.x
```

## 📄 Licencia

Este proyecto fue generado con Figma Make.

## 🤝 Contribuir

Si encuentras algún problema o tienes sugerencias, por favor crea un issue o pull request.
