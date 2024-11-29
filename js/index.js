function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = "block";
}

window.onload = function () {
  showPage("home");
};

function changeTheme() {
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;
  const images = document.querySelectorAll(".cat-img");

  images.forEach((img, index) => {
    let imgSrc = img.getAttribute("src");
    if (body.classList.contains("theme-pirate")) {
      img.setAttribute("src", imgSrc.replace("-pirate.jpg", ".jpg"));
    } else {
      img.setAttribute("src", imgSrc.replace(".jpg", "-pirate.jpg"));
    }
  });

  if (body.classList.contains("theme-pirate")) {
    body.classList.remove("theme-pirate");
    themeSwitcher.textContent = "Switch to Pirate Theme";
  } else {
    body.classList.add("theme-pirate");
    themeSwitcher.textContent = "Switch to Default Theme";
  }
}
