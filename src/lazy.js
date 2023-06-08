
// Verificar si la imagen es visible o no
const isIntersecting = (entry) => {
  return entry.isIntersecting //True (dentro de pantalla) / False (Fuera de pantalla)
}

// Desregistrar o dejar de escuchar una imagen que ya se ha cargado
const accion = (entry) => {
  const divContainerImg = entry.target; //Div padre de la imagen
  const image = divContainerImg.firstChild; //Obtener la imagen
  const url = image.dataset.src; //Obtener la url del dataset
  image.src = url; //Cargar la imagen

  // Cargar imagen una única vez. "Desregisrar" la imagen (unlisten)
  observer.unobserve(divContainerImg);
}

// Añadir imagen como intersectada o "ya fue visualizada en la pantalla"
const observer = new IntersectionObserver(((allElements) => {
  allElements.filter(isIntersecting).forEach(accion);
}))

// Registrar las imágenes
export const registerImage = (imagen) => {
  observer.observe(imagen);
}