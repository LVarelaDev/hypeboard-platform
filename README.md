# 🚀 Hypeboard Platform - Frontend

Frontend desarrollado en **Next.js (React)** que consume un backend en NestJS para mostrar una cartelera de videos tecnológicos con un sistema de "Hype".

---

## 🧠 Descripción

La aplicación muestra una grilla de videos procesados desde el backend, destacando dinámicamente el contenido más relevante ("Joya de la Corona").

### Características principales

- Consumo de API REST `/api/videos`
- Renderizado en grilla responsive
- Video destacado con diseño diferenciado
- Manejo de estados (loading / error)
- UI moderna con TailwindCSS

---

## ⚙️ Tecnologías

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS

---

## 🔐 Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 📦 Instalación

```bash
npm install
```

---

## 🚀 Ejecutar la aplicación

```bash
npm run dev
```
