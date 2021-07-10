const d = document,
  $body = d.querySelector("body"),
  $navContainer = d.getElementById("nav-container"),
  $btnCloseBack = d.getElementById("btn-close-back"),
  $navBtn = d.getElementById("navbar-btn-hamburguer"),
  $backBtn = d.getElementById("back-project"),
  $modalBack = d.getElementById("modal-back"),
  $modalSuccess = d.getElementById("modal-success");

d.addEventListener("click", (e) => {
  /* Show modal */
  if (e.target == $navBtn) {
    $body.classList.toggle("modal");
    $navContainer.classList.toggle("modal");
  }

  /* Open modal back */
  if (e.target == $backBtn) {
    $body.classList.toggle("modal");
    $modalBack.classList.toggle("modal");
  }

  /* Close modal back */
  // TODO: Handle click to close modal back
  if (e.target == $btnCloseBack) {
    $body.classList.toggle("modal");
    $modalBack.classList.toggle("modal");
  }

  // TODO: Handle click of checkbox and add the clase 'active' to the card.
  if (e.target.matches("input[type='checkbox']")) {
    e.target.parentNode.parentNode.classList.toggle("active");
  }
});

// TODO: Handle submit of form to show "succes modal"
