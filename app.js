const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
  "images/17.jpg",
  "images/18.jpg",
  "images/19.jpg",
  "images/20.jpg",
  "images/21.jpg",
  "images/22.jpg",
  "images/23.jpg",
  "images/24.jpg",
  "images/25.jpg",
  "images/26.jpg",
  "images/27.jpg",
  "images/28.jpg",
  "images/29.jpg",
  "images/30.jpg",
  "images/31.jpg",
  "images/32.jpg",
  "images/33.jpg",
  "images/34.jpg",
  "images/35.jpg",
  "images/36.jpg",
  "images/37.jpg",
  "images/38.jpg",
  "images/39.jpg",
  "images/40.jpg",
  "images/41.jpg",
  "images/42.jpg",
  "images/43.jpg",
  "images/44.jpg",
  "images/45.jpg",
  "images/46.jpg",
  "images/47.jpg"
];

const page = document.getElementById("page");
const pageImg = document.getElementById("pageImg");
const pageNum = document.getElementById("pageNum");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageLabel = document.getElementById("pageLabel");
const status = document.getElementById("status");
const hud = document.getElementById("hud");

let pageIndex = 0;
let hideTimer = null;

const totalPages = images.length;

const setFlip = () => {
  page.classList.add("flip");
  setTimeout(() => {
    page.classList.remove("flip");
  }, 220);
};

const updateButtons = () => {
  prevBtn.disabled = pageIndex <= 0;
  nextBtn.disabled = pageIndex >= totalPages - 1;
};

const scheduleHudHide = () => {
  window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(() => {
    hud.classList.add("hidden");
  }, 2000);
};

const showHud = () => {
  hud.classList.remove("hidden");
  scheduleHudHide();
};

const updatePage = () => {
  pageImg.src = images[pageIndex];
  pageImg.alt = `Image ${pageIndex + 1}`;
  pageNum.textContent = `Page ${pageIndex + 1}`;
  pageLabel.textContent = `Page ${pageIndex + 1} of ${totalPages}`;
  status.textContent = `${pageIndex + 1} / ${totalPages}`;
  updateButtons();
  showHud();
};

const next = () => {
  if (pageIndex < totalPages - 1) {
    pageIndex += 1;
    setFlip();
    updatePage();
  }
};

const prev = () => {
  if (pageIndex > 0) {
    pageIndex -= 1;
    setFlip();
    updatePage();
  }
};

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

window.addEventListener("mousemove", showHud);
window.addEventListener("touchstart", showHud, { passive: true });
window.addEventListener("click", showHud);
window.addEventListener("keydown", (event) => {
  showHud();
  if (event.key === "ArrowRight") next();
  if (event.key === "ArrowLeft") prev();
});

updatePage();
