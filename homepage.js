document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  // نقرأ الثيم المحفوظ من قبل (dark أو light)
  // Read previously saved theme (dark or light)
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  // لو الزر موجود (في الهوم بيج فقط)
  // If the button exists (only on homepage)
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");

      // نخزّن الاختيار في المتصفح
      // Save the choice in the browser
      if (isDark) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // هنا تحت خلي بقية كودك (الساعة + backToTop)
  // Keep the rest of your homepage JS (clock + backToTop) below this
});






// نتأكد إن العناصر جاهزة قبل تشغيل الكود
document.addEventListener("DOMContentLoaded", () => {

  // ===== 1) Back to Top Button =====
  const backToTopBtn = document.getElementById("backToTop");

  // إظهار/إخفاء الزر حسب مستوى السكروول
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // عند الضغط يرجع لأعلى الصفحة بسلاسة
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



  // ===== 2) Real-time Clock في الفوتر =====
  const clockSpan = document.getElementById("clock");

  function updateClock() {
    const now = new Date();
    clockSpan.textContent = now.toLocaleTimeString(); // مثال: 10:25:30 PM
  }

  // نحدّث الساعة الآن، وبعدها كل ثانية
  updateClock();
  setInterval(updateClock, 1000);



  // ===== 3) Theme Switcher (Light / Dark) =====
  const themeToggleBtn = document.getElementById("themeToggle");

  // نطبّق آخر ثيم محفوظ في localStorage (لو المستخدم اختار قبل)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // نحفظ اختيار المستخدم
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

});

