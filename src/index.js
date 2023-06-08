const urlBase = "https://randomfox.ca/images/";
const btnAdd = document.querySelector('.add');
const btnClear = document.querySelector('.clean');

// Generar número random entre el 1 - 123
const randomImg = () => {
  var numeroImg = Math.floor(Math.random() * (123 - 1 + 1)) + 1
  return numeroImg
}

// Crear nodo <img> agregando clases, la url de la imagen a renderizar y añadirla a un div padre
const createImageNode = () => {
  const imagen = document.createElement('img');
  imagen.className = "imagen mx-auto";
  imagen.width = "320";
  imagen.src = `${urlBase}${randomImg()}.jpg`;

  const divImg = document.createElement('div');
  divImg.className = "p-3";
  divImg.appendChild(imagen);

  // console.log(imagen);
  return divImg;
};

// Añadir addImageNode
const addImageNode = () => {
  const contenedor = document.querySelector('#container-images');
  const createImg = createImageNode();
  contenedor.append(createImg);
}

// Agregar evento click al botón añadir para agregar el nodo de imagen
btnAdd.addEventListener('click', addImageNode)

//Eliminar la primera imagen del DOM
const removeImageNode = () => {
  const contenedor = document.querySelector('#container-images');
  const divImg = document.querySelector('#container-images>div');
  contenedor.removeChild(divImg);
}

// Agregar evento click al botón añadir para eliminar el nodo de imagen
btnClear.addEventListener('click', removeImageNode);




