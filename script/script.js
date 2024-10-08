//Aquired via ChatGPT to change project images on hover

document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = document.querySelectorAll(".project-link");

  projectLinks.forEach((link, index) => {
    const img = link.querySelector("img");
    const originalSrc = img.src;
    let hoverSrc = "";

    switch (index) {
      case 0:
        hoverSrc = "images/html-dark.svg";
        break;
      case 1:
        hoverSrc = "images/java-dark.svg";
        break;
      case 2:
        hoverSrc = "images/wordpress-dark.svg";
        break;
      case 3:
        hoverSrc = "images/stores-dark.svg";
        break;
    }

    link.addEventListener("mouseover", () => {
      img.src = hoverSrc;
    });

    link.addEventListener("mouseout", () => {
      img.src = originalSrc;
    });
  });
});
