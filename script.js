document.addEventListener("DOMContentLoaded", () => {
  const cursorAnimation = () => {
    const innerCursor = document.querySelector(".inner-cursor");
    const outerCursor = document.querySelector(".outer-cursor");

    const moveCursor = (evt) => {
      const x = evt.clientX;
      const y = evt.clientY;

      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;
      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    };
    document.addEventListener("mousemove", moveCursor);
  };

  const itemsHoverHandler = () => {
    const items = document.querySelectorAll(".menu__item-link");
    const img = document.querySelector(".menu__item-img");
    items.forEach((el) => {
      //ENTER
      el.addEventListener("mouseover", (evt) => {
        img.src = `./img/${evt.target.innerHTML}.jpg
        `;
        img.classList.add("show_img");
      });
      //OUT
      el.addEventListener("mouseout", (evt) => {});
    });
  };

  const liquidTransition = () => {
    new hoverEffect({
      parent: document.querySelector(".img__container"),
      intensity: 0.2,
      image1: "./img/Rimini.jpg",
      image2: "./img/Modena.jpg",
      /* image3: "./img/Parma.jpg",
        image4: "./img/Dozza.jpg",*/
      displacementImage: "./img/heightMap.png",
    });
  };

  //   cursorAnimation();
  itemsHoverHandler();
  liquidTransition();
});
