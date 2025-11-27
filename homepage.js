// homepage.js

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const backToTopBtn = document.getElementById("backToTop");
  const clock = document.getElementById("clock");

  /* ========== 1) تطبيق الثيم المحفوظ ========== */
  const savedTheme = localStorage.getItem("theme"); // "dark" أو "light"

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme"); // نخليه لايت كافتراضي
  }

  /* ========== 2) الزر حق الدارك مود في الهوم بيج فقط ========== */
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-theme");

      if (isDark) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  /* ========== 3) زر Back to Top ========== */
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ========== 4) الساعة في الفوتر ========== */
  if (clock) {
    function updateClock() {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      clock.textContent = now.toLocaleTimeString("en-US", options);
    }
    updateClock();
    setInterval(updateClock, 1000);
  }
});
