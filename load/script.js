document.addEventListener("DOMContentLoaded", function () {
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const image3 = document.getElementById("image3");

  // Mostrar la primera imagen en el centro durante 10 segundos
  setTimeout(() => {
    // Mover la imagen a la derecha 40px
    image1.style.transform = "translate(37%, -68%)";
    // Desvanecer la imagen después de 2 segundos
    setTimeout(() => {
      image1.style.opacity = 0;
    }, 2000);
  }, 23000);

  // Mostrar la segunda imagen después de 11 segundos
  setTimeout(() => {
    image2.style.opacity = 1;
  }, 27500);
  
  // Mostrar la tercera imagen después de 9 segundos
  setTimeout(() => {
    image3.style.opacity = 0;
  }, 18000);
});
