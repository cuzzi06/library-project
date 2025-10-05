# 📚 Library App

Una pequeña app web para gestionar una biblioteca personal: agrega libros, muéstralos en tarjetas, alterna su estado de lectura y elimínalos. Todo con una interfaz _glassmorphism_ cálida sobre fondo madera y una separación clara entre datos y presentación.

---

## ✨ Características

- Estructura de datos basada en objetos `Book` con identificadores únicos generados con `crypto.randomUUID()`.
- Funciones para **agregar**, **mostrar**, **alternar estado de lectura** y **eliminar libros**.
- Interfaz con **tarjetas responsivas** en un _grid_ fluido.
- Formulario modal con la etiqueta `<dialog>` para crear libros sin recargar la página.
- **Estilo visual** consistente con variables CSS y efectos translúcidos.
- **Transiciones suaves** en botones, inputs y diálogo.
- Cuidado por la **accesibilidad**: etiquetas correctas, foco visible y manejo preciso del checkbox.

---

## 🧩 Arquitectura y decisiones

- **Separación de responsabilidades:** la lógica de datos (`myLibrary` y `Book`) está separada de la lógica de presentación (renderizado del DOM).
- **Identificadores únicos:** cada libro tiene un `id` generado con `crypto.randomUUID()`, garantizando operaciones estables.
- **Render idempotente:** al modificar el estado (por ejemplo, alternar “Read”), se re-renderiza la lista completa.
- **Modal nativo:** uso de `<dialog>` con `showModal()` y _backdrop_ semitransparente.

---

## 🗂️ Estructura del proyecto

📦 library-app/
├── index.html # Estructura base y formulario modal
├── style.css # Estilos globales y diseño visual
└── script.js # Lógica de datos, render y eventos

---

## 🎨 Estilo y diseño

- Paleta cálida basada en tonos madera, blanco cálido y acentos verdes y terracota.
- Diálogo, inputs y tarjetas con efecto _glassmorphism_: bordes suaves, sombras internas y externas.
- Botones con acentos: verde para acciones positivas y rojo para eliminar o cancelar.
- Disposición en _grid_ adaptable con espaciado fluido y límites de ancho.

---

## ♿ Accesibilidad y UX

- Campos con `required` y tipos adecuados (`number`, `text`, `checkbox`).
- Foco visible y transiciones suaves.
- Checkbox personalizado con SVG inline y contraste legible.
- Etiquetas `<label>` enlazadas correctamente para clics precisos.

---

## 🚀 Uso

- Abre el archivo `index.html` en tu navegador.
- Presiona **“Create new book”** para abrir el formulario.
- Completa los datos del libro y confírmalo para añadirlo.
- Usa **“Toggle status”** para alternar leído/no leído.
- Usa **“Remove”** para eliminar un libro.

---

## 🌐 Compatibilidad

- Navegadores modernos soportan `<dialog>`.
- Los efectos de desenfoque usan `backdrop-filter`, visibles en navegadores Chromium y Safari.

---

## 🔮 Próximas mejoras

- Guardar libros en `localStorage`.
- Filtros y ordenamiento por autor, título o estado.
- Edición inline de los datos de los libros.
- Pruebas unitarias de la UI y validación más robusta.

---

## 👨‍💻 Autor

Desarrollado por **Gianfranco Palacios (@cuzzi06)**  
Parte del aprendizaje en **The Odin Project** y proyectos personales.  
💡 Inspirado en patrones de diseño UI modernos y prácticas limpias de código.
