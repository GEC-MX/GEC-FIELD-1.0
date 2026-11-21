# GEC FIELD

App de supervisión de obra de GEC (Grupo Ejecutivo Confianza): Diario de Obra, Programa, Planos y Formatos.

- Se instala desde el navegador del celular (Android o iPhone) y funciona sin señal.
- Inicio de sesión con la cuenta de Microsoft de GEC.
- Los datos viven en el SharePoint de GEC; este repositorio solo contiene el código de la app (sin contraseñas ni secretos).

## Archivos
| Archivo | Para qué sirve |
|---|---|
| `index.html` | Pantalla y estilos de la app |
| `app.js` | Funcionamiento de la app |
| `auth.js` | Inicio de sesión con Microsoft (Entra ID) |
| `sw.js` | Trabajo sin señal (guarda la app en el teléfono) |
| `manifest.webmanifest`, `icons/` | Instalación como app |

## Publicación
GitHub Pages desde la rama `main`, carpeta raíz. Al publicar una versión nueva, cambiar `VERSION` en `sw.js`.
