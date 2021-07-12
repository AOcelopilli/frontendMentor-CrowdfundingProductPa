const d = document,
  $body = d.querySelector("body"),
  $navContainer = d.getElementById("nav-container"),
  $btnCloseBack = d.getElementById("btn-close-back"),
  $navBtn = d.getElementById("navbar-btn-hamburguer"),
  $backBtn = d.getElementById("back-project"),
  $modalBack = d.getElementById("modal-back"),
  $modalSuccessBtn = d.getElementById("modal-success-ok"),
  $modalSuccess = d.getElementById("modal-success"),
  $form = d.getElementById("form"),
  $email = d.getElementById("email"),
  $pledge = d.getElementById("pledge"),
  $btnBookmark = d.getElementById("btn-bookmark");

d.addEventListener("click", (e) => {
  /* Show modal menu mobile */
  if (e.target == $navBtn) {
    $body.classList.toggle("modal");
    $navContainer.classList.toggle("modal");
  }

  /* 
    - Handle click of each project in main-container
    - Open modal back projects
    - Scroll into the project selected
    - Add class active
  */

  if (e.target.matches("[data-1]")) {
    let $modal = d.querySelector("[data-1-modal]");

    $body.classList.toggle("modal");
    $modalBack.classList.toggle("modal");

    setTimeout(() => {
      $modal.scrollIntoView();
    }, 200);

    setTimeout(() => {
      $modal.classList.toggle("active");
      d.querySelector("[data-1-modal] input[type='checkbox']").setAttribute(
        "checked",
        ""
      );
    }, 1000);
  }

  if (e.target.matches("[data-2]")) {
    let $modal = d.querySelector("[data-2-modal]");

    $body.classList.toggle("modal");
    $modalBack.classList.toggle("modal");

    setTimeout(() => {
      $modal.scrollIntoView();
    }, 200);

    setTimeout(() => {
      $modal.classList.toggle("active");
      d.querySelector("[data-2-modal] input[type='checkbox']").setAttribute(
        "checked",
        ""
      );
    }, 1000);
  }

  if (e.target.matches("[data-3]")) {
    let $modal = d.querySelector("[data-3-modal]");

    $body.classList.toggle("modal");
    $modalBack.classList.toggle("modal");

    setTimeout(() => {
      $modal.scrollIntoView();
    }, 200);

    setTimeout(() => {
      $modal.classList.toggle("active");
      d.querySelector("[data-3-modal] input[type='checkbox']").setAttribute(
        "checked",
        ""
      );
    }, 1000);
  }

  /* Open modal back projects */
  if (e.target == $backBtn) {
    $body.classList.toggle("modal");
    $modalBack.classList.toggle("modal");
  }

  // Handle click to close modal back projects
  if (e.target == $btnCloseBack) {
    $body.classList.toggle("modal");
    $modalBack.classList.toggle("modal");
  }

  // Handle click of checkbox and add the clase 'active' to the card.
  if (e.target.matches("input[type='checkbox']")) {
    e.target.parentNode.parentNode.classList.toggle("active");
  }

  if (e.target == $modalSuccessBtn) {
    $modalSuccess.classList.remove("modal");
    $body.classList.toggle("modal");

    d.querySelector("[data-1-modal]").classList.remove("active");
    d.querySelector("[data-2-modal]").classList.remove("active");
    d.querySelector("[data-3-modal]").classList.remove("active");
  }

  if (e.target == $btnBookmark) {
    $btnBookmark.classList.toggle("active");
  }
});

// Handle submit of form to show "succes modal"
$form.addEventListener("submit", (e) => {
  e.preventDefault();

  $modalBack.classList.remove("modal");

  $modalSuccess.classList.add("modal");
  $modalSuccess.scrollIntoView();

  $form.reset();
});

// Add require to email input when checkbox is checked
d.addEventListener("change", (e) => {
  if (e.target == $pledge) {
    if ($pledge.checked) {
      $email.required = true;
      console.log("checked");
    } else {
      $email.required = false;
      console.log("no checked");
    }
  }
});
