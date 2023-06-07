const urlBase = "https://randomfox.ca/images/";
const btnAdd = document.querySelector('.add');
const btnClear = document.querySelector('.clean');

btnAdd.addEventListener('click', () => {
  var numeroImg = Math.floor(Math.random() * (123 - 1 + 1)) + 1

  console.log(numeroImg);

  const createImageNode = () => {
    const imagen = document.createElement('img');
    imagen.className = "imagen mx-auto mt-4";
    imagen.width = "320";
    imagen.src = `${urlBase}${numeroImg}.jpg`;

    // console.log(imagen);
    return imagen;
  };

  const createImage = createImageNode();
  const contenedor = document.querySelector('#container-images');
  contenedor.appendChild(createImage);
});

btnClear.addEventListener('click', () => {
  const imagen = document.querySelector('.imagen');
  const contenedor = document.querySelector('#container-images');
  contenedor.removeChild(imagen)
})




