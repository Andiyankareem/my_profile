// Interactive tilt effect
const card = document.querySelector(".profile-card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.transform = `perspective(600px) rotateY(${(x - rect.width/2)/20}deg) rotateX(${-(y - rect.height/2)/20}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
});
