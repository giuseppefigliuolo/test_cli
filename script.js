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
    const items = document.querySelectorAll(".menu__item");
    items.forEach((el) => {
      el.addEventListener("mouseenter", (evt) => {
        evt.target
          .querySelector(".menu__item-link")
          .classList.toggle("menu__item-link_disappear");
      });
      el.addEventListener("mouseleave", () => console.log("via"));
    });
  };

  cursorAnimation();
  itemsHoverHandler();
});