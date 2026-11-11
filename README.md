# tailwind-project

Proyecto de práctica con React, TypeScript y Vite. Incluye una página inicial con
enlaces a las secciones App, Flex y Grid. El grid se adapta a tres tamaños:

- Móvil: 1 columna.
- Tablet (desde 600 px): 2 columnas.
- Escritorio (desde 900 px): 3 columnas.

## Desarrollo local

```bash
npm install
npm run dev
```

Para validar la compilación:

```bash
npm run build
npm run preview
```

## Versionar y sincronizar con GitHub

El proyecto ya tiene un commit local en la rama `main`. Crea un repositorio
remoto vacío llamado `tailwind-project`, reemplaza `<usuario>` por tu usuario
de GitHub y conecta/sincroniza el proyecto:

```bash
git remote add origin https://github.com/<usuario>/tailwind-project.git
git push -u origin main
```

Si vas a iniciar el versionado desde cero en otra copia del proyecto:

```bash
git init -b main
git add .
git commit -m "Crear proyecto responsive"
```

Para publicar cambios posteriores:

```bash
git add .
git commit -m "Actualizar proyecto"
git push
```

## Publicar en GitHub Pages

El workflow [deploy.yml](./.github/workflows/deploy.yml) compila y publica el
proyecto al hacer push a `main`. En GitHub, abre **Settings → Pages** y elige
**GitHub Actions** como fuente de publicación.

El `base` de Vite se configura automáticamente para el repositorio
`tailwind-project` durante el workflow. Una vez que termine el despliegue, la
página estará en:

`https://<usuario>.github.io/tailwind-project/`

Si el repositorio usa otro nombre, actualiza el `base` en `vite.config.ts` y la
ruta del enlace de Pages en este README.
