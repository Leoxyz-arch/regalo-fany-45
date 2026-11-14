# Regalo Fany 45

Aplicación web estática interactiva para el cumpleaños #45 de Fany, desarrollada por sus dos hijos.

## Stack Tecnológico

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

## Estructura del Proyecto

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # Despliegue automático a GitHub Pages
├── public/
│   ├── audio/                # Archivos de audio / música
│   └── images/               # Imágenes y fotos
├── src/
│   ├── components/           # Componentes reutilizables
│   ├── views/                # Vistas y pantallas temáticas
│   ├── data/
│   │   └── config.js         # Configuración y metadatos del proyecto
│   ├── App.jsx               # Contenedor raíz responsive
│   ├── index.css             # Directivas de Tailwind CSS
│   └── main.jsx              # Punto de entrada de React
├── index.html
├── package.json
└── vite.config.js            # Configuración de Vite con base relativa './'
```

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```
