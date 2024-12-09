// antes tivemos que passar o parametro da url da imagem para uma resolução menor w=10
// Com isso o tamanho dela fica menor para esperar o carregamento das imagens

const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const image = entry.target;

    image.src = image.src.replace("&w=10&", "&w=1000&");

    observer.unobserve(image);
  });
}, {});

images.forEach((image) => {
  observer.observe(image);
});