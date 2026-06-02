# 🖥️ Portafolio Personal

Portafolio web personal construido con **React**, **TypeScript** y **Vite**, con animaciones 3D, diseño responsivo y un sistema de contacto funcional. Desplegado como SPA estática.

---

## 🚀 Tecnologías utilizadas

| Categoría | Tecnología |
|---|---|
| Framework UI | React 19 + TypeScript |
| Bundler | Vite 8 |
| Estilos | Tailwind CSS v4 |
| Animaciones 2D | GSAP + ScrollTrigger |
| 3D / WebGL | Three.js · @react-three/fiber · @react-three/drei |
| Post-procesamiento 3D | @react-three/postprocessing |
| Formulario de contacto | EmailJS |
| Contadores animados | react-countup |
| Responsividad | react-responsive |

---

## 📐 Estructura del proyecto

```
src/
├── components/
│   ├── HeroModels/
│   │   ├── HeroExperience.tsx   # Canvas 3D principal con auto-rotación
│   │   ├── HeroLights.tsx       # Iluminación de la escena 3D
│   │   ├── Office.jsx           # Modelo 3D de oficina (GLTF)
│   │   └── Particles.jsx        # Partículas flotantes en la escena
│   ├── AnimatedCounter.tsx      # Contador numérico animado
│   ├── Button.tsx               # Botón reutilizable con animación
│   ├── ContactExperience.tsx    # Escena 3D de la sección de contacto
│   ├── LogoSection.tsx          # Marquee de logos de tecnologías
│   ├── NavBar.tsx               # Navbar fija con efecto al hacer scroll
│   ├── RepoBanner.tsx           # Banner con enlace al repositorio
│   └── TitleHeader.tsx          # Encabezado reutilizable de secciones
├── constants/
│   └── index.ts                 # Links de navegación, textos y datos estáticos
├── sections/
│   ├── Hero.tsx                 # Sección de presentación con modelo 3D
│   ├── Showcase.tsx             # Galería de proyectos con links directos
│   ├── FeatureCards.tsx         # Tarjetas de características personales
│   ├── TechStack.tsx            # Stack tecnológico con descripción editorial
│   ├── Contact.tsx              # Formulario de contacto con EmailJS
│   └── Footer.tsx               # Pie de página con redes sociales
├── App.tsx
├── main.tsx
└── index.css                    # Sistema de diseño con Tailwind + clases personalizadas
```

---

## 🗂️ Secciones del portafolio

### Hero
- Presentación principal con texto animado deslizante (slider de palabras clave: *Full-Stack, Backend, Frontend, Web*).
- Modelo 3D de una oficina que **rota automáticamente** y es interactivo con `OrbitControls` (arrastrar, zoom).
- Partículas flotantes en la escena.
- Botón de llamada a la acción que lleva a la sección de contacto.

### RepoBanner
- Franja fija debajo del navbar con un enlace pill al **repositorio de este portafolio en GitHub**.
- Efecto glassmorphism con `backdrop-blur`.

### Showcase — Proyectos
Galería con **6 proyectos reales**, todos desplegados y accesibles en vivo:

| Proyecto | Tecnologías |
|---|---|
| Juego de Snake | React, TypeScript, Nginx |
| Calculadora | React, componentes de estado |
| Sistema de Inventario y Ventas | React, TypeScript, FastAPI, PostgreSQL, Docker |
| Tracker de equipos de la NFL | React, Vite, Nginx |
| NBA Players API | FastAPI, HTML/CSS/JS, PostgreSQL, Docker |
| Medinet | Laravel, Flutter Web, Supabase, Docker |

Cada tarjeta es **clickeable** y abre el proyecto en una nueva pestaña. Las tarjetas tienen efecto hover de elevación.

### FeatureCards
Tarjetas que destacan las características y valores personales del desarrollador.

### TechStack
- Grid visual con los logos animados de las tecnologías dominadas.
- Tres tarjetas editoriales que explican el **stack escogido**, **por qué se escogió** y **cómo se aplicó** en proyectos reales.

### Contact
- Formulario funcional integrado con **EmailJS** — los mensajes llegan directamente al correo del desarrollador sin necesidad de backend propio.
- Escena 3D decorativa con `ContactExperience`.

### Footer
- Copyright.

---

## ⚙️ Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/LuisPHernandez/Portafolio.git
cd Portafolio

# Instalar dependencias
npm install

# Configurar variables de entorno
# Crea un archivo .env con tus claves de EmailJS:
# VITE_EMAILJS_SERVICE_ID=...
# VITE_EMAILJS_TEMPLATE_ID=...
# VITE_EMAILJS_PUBLIC_KEY=...

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

---

## 👤 Autor

**Luis Pedro Hernández**  
Estudiante de Ingeniería en Ciencias de la Computación — Universidad del Valle de Guatemala  
[GitHub](https://github.com/LuisPHernandez) · [Portafolio](http://portafolio.lphm.lat)
