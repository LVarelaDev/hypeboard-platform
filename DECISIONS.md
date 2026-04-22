# DECISIONS - Frontend

## General

El frontend fue diseñado siguiendo una arquitectura modular basada en **features**, separando claramente las responsabilidades entre:

- UI
- Lógica
- Acceso a datos

El objetivo principal fue construir una aplicación **escalable, mantenible y desacoplada del backend**, permitiendo evolucionar cada capa de manera independiente.

---

## Decisiones técnicas principales

### 1. Arquitectura por módulos

Se organizó el código bajo: modules/videos/

- Escalabilidad en proyectos grandes
- Codigo agrupado por dominio
- Mayor mantenibilidad

---

### 2. Uso de Custom Hook `useVideos`

Se encapsula toda la logica de consumo de datos en un hook:

```ts
const { data, loading, error } = useVideos();
```

Responsabilidades:

- Llamar al servicio
- Manejar estados (loading, error, success)
- Exponer método de refetch

### 3. Separación de componentes

Se crearon dos componentes independientes para mayo legibilidad y evitar logica completa

- CardVideoCrown
- CardVideo

### 3. Uso de next/image

Se utiliza el componente optimizado de Next.js para lazy loading y mejor perfomance

```html
<image />
```
