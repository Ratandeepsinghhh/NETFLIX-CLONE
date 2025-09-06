const overlay = document.getElementById("videoOverlay");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.getElementById("closeOverlay");

document.querySelectorAll(".thumb-card").forEach(card => {
  card.addEventListener("click", () => {
    const videoUrl = card.getAttribute("data-video") + "&autoplay=1";
    videoFrame.src = videoUrl;
    overlay.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  videoFrame.src = "";
});
