const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqppyvjd";

document.addEventListener("DOMContentLoaded", () => {
  saveSystemInfo();
  renderSystemInfo();
  loadComments();
  initContactModal();
  initThemeToggle();
});

function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screen: `${window.screen.width}×${window.screen.height}`,
  };
  localStorage.setItem("systemInfo", JSON.stringify(info));
}

function renderSystemInfo() {
  const info = JSON.parse(localStorage.getItem("systemInfo"));
  const rows = [
    ["Браузер", info.userAgent],
    ["Платформа / ОС", info.platform],
    ["Мова системи", info.language],
    ["Роздільна здатність", info.screen],
  ];
  document.getElementById("system-info").innerHTML = rows
    .map(([k, v]) => `<li><span class="sys-key">${k}:</span> <span class="sys-val">${v}</span></li>`)
    .join("");
}

async function loadComments() {
  const list = document.getElementById("comments-list");
  const url = `https://jsonplaceholder.typicode.com/posts/12/comments`;

  try {
    const response = await fetch(url);
    const comments = await response.json();
    list.innerHTML = comments
      .map((c) => `
        <article class="review">
          <h3 class="review-name">${c.name}</h3>
          <p class="review-email">${c.email}</p>
          <p class="review-body">${c.body}</p>
        </article>`)
      .join("");
  } catch (error) {
    list.innerHTML = `<p class="review-error">Не вдалося завантажити відгуки.</p>`;
    console.error(error);
  }
}

function initContactModal() {
  const modal = document.getElementById("contact-modal");
  const form = document.getElementById("contact-form");

  setTimeout(() => modal.classList.add("open"), 60000);

  document.getElementById("modal-close").addEventListener("click", () => {
    modal.classList.remove("open");
  });

  form.action = FORMSPREE_ENDPOINT;
  form.method = "POST";
}

function initThemeToggle() {
  const hours = new Date().getHours();
  applyTheme(hours >= 7 && hours < 21 ? "light" : "dark");

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.body.classList.contains("dark") ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

function applyTheme(theme) {
  const button = document.getElementById("theme-toggle");
  if (theme === "dark") {
    document.body.classList.add("dark");
    button.textContent = "☀️ Денний режим";
  } else {
    document.body.classList.remove("dark");
    button.textContent = "🌙 Нічний режим";
  }
}
