document.addEventListener("DOMContentLoaded", () => {
  const profilesContainer = document.getElementById("profiles");
  const addProfileCard = document.getElementById("addProfile");

  // Colors that map to CSS classes above
  const colors = ["blue", "orange", "green", "yellow", "red", "purple", "teal"];

  function createProfileElement(name, colorClass) {
    const el = document.createElement("div");
    el.className = "profile";
    el.innerHTML = `
      <div class="avatar ${colorClass}"></div>
      <p>${name}</p>
    `;
    return el;
  }

  // Click (and Enter key) on "Add Profile"
  function handleAdd() {
    const name = prompt("Enter profile name:");
    if (!name) return;

    const colorClass = colors[Math.floor(Math.random() * colors.length)];
    const newProfile = createProfileElement(name.trim(), colorClass);

    // Insert before the Add card so Add stays last
    profilesContainer.insertBefore(newProfile, addProfileCard);
  }

  addProfileCard.addEventListener("click", handleAdd);
  addProfileCard.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") handleAdd();
  });
});
