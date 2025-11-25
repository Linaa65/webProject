// نتأكد إن الكود يشتغل بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {

  // نجيب الكونتينر اللي فيه الكروت
  const servicesGrid = document.querySelector(".services-grid");
  const sortSelect = document.getElementById("sort");

  // نحول كل كرت في الصفحة إلى عنصر داخل مصفوفة فيها (العنصر + الاسم + السعر)
  let services = Array.from(servicesGrid.querySelectorAll(".service-item")).map(card => {
    const name = card.querySelector(".service-info h3").textContent.trim();
    const priceText = card.querySelector(".price").textContent;
    // نطلع الرقم من النص مثل "4000 SAR / month"
    const price = parseFloat(priceText); // ياخذ أول رقم في النص

    return {
      element: card,
      name: name,
      price: price
    };
  });

  // دالة تعيد رسم الكروت في الصفحة حسب ترتيب المصفوفة
  function renderServices(list) {
    // نفرغ الكونتينر
    servicesGrid.innerHTML = "";
    // نضيف الكروت بالترتيب الجديد
    list.forEach(item => {
      servicesGrid.appendChild(item.element);
    });
  }

  // ترتيب عشوائي (Shuffle) عند فتح الصفحة
  function shuffleServices() {
    let shuffled = [...services]; // نسخة من المصفوفة
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    renderServices(shuffled);
  }

  // نناديها أول ما تفتح الصفحة
  shuffleServices();

  // دالة للفرز حسب الخيار
  function sortServices(criteria) {
    let sorted = [...services]; // نشتغل على نسخة

    switch (criteria) {
      case "price-low":
        // من الأقل للأعلى
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        // من الأعلى للأقل
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "name-asc":
        // A → Z
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "name-desc":
        // Z → A
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        // لو شيء غير معروف نرجع ترتيب عشوائي
        shuffleServices();
        return;
    }

    renderServices(sorted);
  }

  // لما المستخدم يغيّر اختيار الفرز من القائمة
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const value = e.target.value;
      sortServices(value);
    });
  }

});
