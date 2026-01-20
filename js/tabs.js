// ここからコードを書いてください
function setupTabs() {
  const home = document.querySelectorAll('[data-tab="home"]');
  const conv = document.querySelectorAll('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const convSection = document.getElementById("converter");
  home.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      homeSection.classList.remove("hidden");
      convSection.classList.add("hidden");
    });
  });
  conv.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      homeSection.classList.add("hidden");
      convSection.classList.remove("hidden");
    });
  });
}
export { setupTabs };
