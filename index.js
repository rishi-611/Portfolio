// "use strict";

// const thumbnails = document.querySelectorAll(".thumbnail");
// const projectTitle = document.querySelectorAll(".project-title");

// const onThumbnailHover = (i) => {
//   if (!thumbnails[i].classList.contains("blur")) {
//     thumbnails[i].classList.add("blur");
//   }
//   if (projectTitle[i].classList.contains("d-none")) {
//     projectTitle[i].classList.remove("d-none");
//   }
// };

// const undoThumbnailHover = (i) => {
//   if (thumbnails[i].classList.contains("blur")) {
//     thumbnails[i].classList.remove("blur");
//   }
//   if (!projectTitle[i].classList.contains("d-none")) {
//     projectTitle[i].classList.add("d-none");
//   }
// };

// thumbnails.forEach((thumbnail, i) => {
//   thumbnail.addEventListener("hover", () => {
//     onThumbnailHover(i);
//   });

//     thumbnail.addEventListener("mouseout", () => {
//       undoThumbnailHover(i);
//     });
// });
