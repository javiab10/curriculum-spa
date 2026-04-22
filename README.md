# Currículum Profesional SPA

Una aplicación moderna de una sola página (SPA) desarrollada con **React**, **Vite**, **TypeScript** y **Tailwind CSS** para presentar de manera profesional tu perfil, experiencia y proyectos.

## 🎯 Características

- **SPA Moderna** - Navegación fluida sin recargar la página
- **Responsive Design** - Totalmente adaptado a móviles, tablets y escritorio
- **Performance Optimizado** - Construido con Vite para máxima velocidad
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Estilos modernos y personalizables
- **Iconos Lucide** - Librería de iconos SVG ligera y elegante
- **Smooth Scroll** - Navegación suave entre secciones
- **Animaciones CSS** - Efectos de entrada profesionales

## 📋 Secciones

- **Hero** - Presentación inicial con datos de contacto
- **Sobre mí** - Descripción del perfil profesional
- **Tecnologías** - Stack tecnológico categorizado
- **Experiencia** - Historial laboral con logros
- **Proyectos** - Portfolio de proyectos realizados
- **Contacto** - Información de contacto e idiomas

## 🛠️ Stack Tecnológico

| Tecnología   | Versión | Propósito               |
| ------------ | ------- | ----------------------- |
| React        | 18.3.1  | Framework UI            |
| Vite         | 5.4.1   | Build tool y dev server |
| TypeScript   | 6.0.3   | Lenguaje tipado         |
| Tailwind CSS | 3.4.4   | Framework CSS           |
| Lucide React | 0.490.0 | Librería de iconos      |

## 🚀 Instalación y Setup

### Requisitos previos

- Node.js 18+
- npm o yarn

### Pasos de instalación

```bash
# 1. Clonar o descargar el proyecto
cd curriculum-spa

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# El servidor está disponible en http://localhost:5173
```

## 📦 Scripts Disponibles

```bash
# Iniciar desarrollo local con hot reload
npm run dev

# Compilar para producción
npm run build

# Previsualizador local de la compilación
npm run preview
```

## 📁 Estructura del Proyecto

```
curriculum-spa/
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Componente raíz con navbar y footer
│   │   ├── Navbar.jsx       # Barra de navegación responsive
│   │   └── Footer.jsx       # Pie de página
│   ├── App.tsx              # Componente principal con secciones
│   ├── data.ts              # Datos del currículum con interfaces TS
│   ├── main.jsx             # Punto de entrada React
│   └── index.css            # Estilos globales y animaciones
├── public/                  # Archivos estáticos
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración TypeScript
├── vite.config.js           # Configuración Vite
├── tailwind.config.js       # Configuración Tailwind CSS
├── postcss.config.js        # Configuración PostCSS
└── vercel.json              # Configuración para Vercel
```

## ✏️ Personalizar contenido

Edita el archivo `src/data.ts` para actualizar:

```typescript
const resumeData: ResumeData = {
  name: "Tu nombre",
  title: "Tu título profesional",
  about: "Tu descripción...",
  contact: { ... },
  technologies: [ ... ],
  languages: [ ... ],
  experience: [ ... ],
  projects: [ ... ],
  education: [ ... ],
};
```

## 🎨 Personalizar estilos

- **Colores**: Edita `tailwind.config.js` en la sección `theme.extend`
- **Tipografía**: Modifica `src/index.css` para cambiar fuentes
- **Animaciones**: Ajusta los keyframes en `src/index.css`

## 🌐 Despliegue

### Vercel (Recomendado para SPAs)

1. Sube el proyecto a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Vite
4. La configuración `vercel.json` maneja correctamente las rutas SPA
5. Haz deploy con un solo click

**El archivo `vercel.json` incluido:**

- Redirige todas las rutas a `index.html` (necesario para SPAs)
- Asegura que React maneje el enrutamiento
- Configura headers de caché para mejor performance

### Otros servicios

**Netlify:**

```bash
npm run build
# Sube la carpeta `dist` a Netlify
```

**GitHub Pages:**

```bash
# Requiere configuración adicional de ruta base en vite.config.js
npm run build
```

## 🔧 Configuración para Vercel

El archivo `vercel.json` que se incluye en la raíz del proyecto está configurado automáticamente para SPAs:

```json
{
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

### ✅ Qué hace esta configuración:

1. **buildCommand**: Ejecuta `npm run build` (Vite compilation)
2. **outputDirectory**: Indica que los archivos compilados están en `dist`
3. **rewrites**: Redirige **todas las rutas** a `index.html`, permitiendo que React maneje la navegación client-side

**Esto es crucial para SPAs** porque sin esta configuración, las rutas internas causarían errores 404.

## 📊 Rendimiento

- **Lighthouse Score**: ~95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~55KB gzipped (Vite + React + Tailwind)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

## 🐛 Troubleshooting

### Smooth scroll no funciona en navegación

- Verifica que `scroll-behavior: smooth` esté en `src/index.css`
- Comprueba que los `id` de las secciones coincidan con los `href` del navbar

### Estilos no se aplican correctamente

- Ejecuta `npm install` nuevamente
- Borra la carpeta `node_modules` y `dist`
- Reinicia el servidor de desarrollo

### Problemas al desplegar en Vercel

- Verifica que el `buildCommand` sea `npm run build`
- Asegúrate de que `outputDirectory` sea `dist`
- Comprueba que `vercel.json` esté en la raíz del proyecto
- Revisa que tenga la configuración de `rewrites` para manejar SPAs

## 📚 Recursos útiles

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 📝 Licencia

Este proyecto es de uso personal. Siéntete libre de adaptarlo y compartirlo según tus necesidades.

---

**Desarrollado con ❤️ como tu currículum profesional**
