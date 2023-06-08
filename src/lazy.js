
// Verificar si la imagen es visible o no
const isIntersecting = (entry) => {
  return entry.isIntersecting //True (dentro de pantalla) / False (Fuera de pantalla)
}

// Desregistrar o dejar de escuchar una imagen que ya se ha cargado
const accion = (entry) => {
  const nodo = entry.target; //Div padre de la imagen
  console.log('Soy visible');

  // Cargar imagen una única vez. "Desregisrar" la imagen (unlisten)
  observer.unobserve(nodo);
}

// Añadir imagen como intersectada o "ya fue visualizada en la pantalla"
const observer = new IntersectionObserver(((allElements) => {
  allElements.filter(isIntersecting).forEach(accion);
}))

// Registrar las imágenes
export const registerImage = (imagen) => {
  observer.observe(imagen);
}