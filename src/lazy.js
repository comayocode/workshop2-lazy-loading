// Contador para el log
let totalImages = 0;
let loadedImages = 0;

// Verificar si la imagen es visible o no
const isIntersecting = (entry) => {
  return entry.isIntersecting //True (dentro de pantalla) / False (Fuera de pantalla)
}

// Desregistrar o dejar de escuchar una imagen que ya se ha cargado
const loadImage = (entry) => {
  const divContainerImg = entry.target; //Div padre de la imagen
  const image = divContainerImg.firstChild; //Obtener la imagen
  const url = image.dataset.src; //Obtener la url del dataset
  image.src = url; //Cargar la imagen

  image.onload = () => {
    loadedImages += 1; //Agregar +1 imagen ya cargada
    log(); // Ejecutar log
  }

  // Cargar imagen una única vez. "Desregisrar" la imagen (unlisten)
  observer.unobserve(divContainerImg);
}

// Añadir imagen como intersectada o "ya fue visualizada en la pantalla"
const observer = new IntersectionObserver(((allElements) => {
  allElements.filter(isIntersecting).forEach(loadImage);
}))

// Registrar las imágenes
export const registerImage = (imagen) => {
  observer.observe(imagen);
  totalImages += 1; // Añadir +1 imagen cada que se da clic al botón añadir
  log(); // Ejecutar log
}

function log() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}