# 🐕 Refugio Esperanza Canina - Sitio Web

Un sitio web moderno y responsivo para refugios de perros, diseñado para ayudar a encontrar hogares amorosos para mascotas rescatadas.

## 📁 Estructura del Proyecto

```
refugio-perros/
├── index.html          # Página principal del sitio web
├── admin.html          # Panel de administración
├── styles.css          # Estilos del sitio principal
├── admin-styles.css    # Estilos del panel de administración
├── script.js           # JavaScript del sitio principal
├── admin-script.js     # JavaScript del panel de administración
├── images/             # Carpeta para todas las imágenes
│   └── dogs/          # Imágenes de los perros
└── README.md          # Este archivo
```

## 🚀 Cómo Usar

### Ver el Sitio Web
1. Abre `index.html` en tu navegador
2. Navega por las diferentes secciones
3. Los visitantes pueden ver los perros disponibles para adopción

### Administrar Mascotas
1. Abre `admin.html` en tu navegador
2. Usa el formulario para agregar nuevos perros
3. Los cambios se reflejan automáticamente en el sitio principal

## 📸 Cómo Agregar Imágenes de Perros

### Método Recomendado (Imágenes Locales):

1. **Prepara la imagen:**
   - Usa fotos de buena calidad (mínimo 500x500 píxeles)
   - Formatos recomendados: JPG, PNG, WebP
   - Tamaño recomendado: menos de 2MB por imagen

2. **Nombra el archivo:**
   - Usa nombres descriptivos: `max-pastor-aleman.jpg`
   - Solo letras, números y guiones
   - Sin espacios ni caracteres especiales

3. **Guarda la imagen:**
   - Coloca el archivo en la carpeta `images/dogs/`
   - Ejemplo: `images/dogs/max-pastor-aleman.jpg`

4. **Agrega el perro:**
   - Ve al panel de administración (`admin.html`)
   - Completa el formulario
   - En "Imagen del Perro" escribe: `images/dogs/max-pastor-aleman.jpg`
   - O usa el botón "Subir Imagen" para seleccionar el archivo

### Ejemplo de Estructura de Imágenes:
```
images/dogs/
├── max-pastor-aleman.jpg
├── luna-mestizo.jpg
├── rocky-labrador.jpg
├── bella-chihuahua.jpg
└── charlie-beagle.jpg
```

## 🔧 Características

- ✅ **Diseño Responsivo** - Se adapta a móviles y tablets
- ✅ **Panel de Administración** - Fácil gestión de mascotas
- ✅ **Sin Base de Datos** - Usa almacenamiento local del navegador
- ✅ **Imágenes Locales** - Control total sobre las fotos
- ✅ **Animaciones Suaves** - Experiencia de usuario moderna
- ✅ **SEO Optimizado** - Estructura semántica HTML5

## 🎨 Personalización

### Cambiar Colores:
Edita las variables CSS en `styles.css`:
- Color principal: `#e74c3c` (rojo)
- Color secundario: `#2c3e50` (azul oscuro)

### Cambiar Información del Refugio:
Edita `index.html` y actualiza:
- Nombre del refugio
- Dirección y teléfono
- Horarios de atención
- Enlaces de redes sociales

## 🌐 Publicar en Internet

### Opciones Gratuitas:
1. **GitHub Pages** - Ideal para proyectos sin fines de lucro
2. **Netlify** - Fácil de usar, dominio personalizado
3. **Vercel** - Rápido y confiable
4. **Firebase Hosting** - De Google, muy estable

### Pasos Básicos:
1. Sube todos los archivos a tu servicio elegido
2. Asegúrate de que la carpeta `images/dogs/` tenga todas las fotos
3. Configura el dominio personalizado si lo deseas

## 💡 Tips para Mejores Resultados

### Fotografía de Mascotas:
- Usa luz natural siempre que sea posible
- Captura la personalidad del perro
- Incluye fotos de cuerpo completo y primeros planos
- Evita fondos distractores

### Descripciones Efectivas:
- Menciona el temperamento del perro
- Incluye si es bueno con niños/otros animales
- Describe su nivel de energía
- Menciona necesidades especiales si las hay

## 🆘 Solución de Problemas

### Las imágenes no se ven:
1. Verifica que el archivo esté en `images/dogs/`
2. Revisa que el nombre coincida exactamente
3. Asegúrate de que el formato sea JPG, PNG o WebP

### Los cambios no se guardan:
1. Verifica que JavaScript esté habilitado
2. Usa un navegador moderno (Chrome, Firefox, Safari)
3. No uses modo incógnito (borra el almacenamiento local)

### El sitio se ve mal en móvil:
1. Asegúrate de tener buena conexión a internet
2. Actualiza la página (Ctrl+F5)
3. Verifica que todos los archivos CSS estén cargando

## 📞 Soporte

Este es un proyecto de código abierto creado para ayudar a refugios de animales. Si necesitas ayuda adicional, considera contactar a un desarrollador web local que pueda colaborar con tu causa.

---

**¡Gracias por ayudar a encontrar hogares para los perritos! 🐾❤️**