// رسالة ترحيب عند فتح الموقع
console.log("مرحباً بكم في الموقع الشخصي للمهندس يوسف صالح إبراهيم");

// حركة ظهور الأقسام عند التمرير
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});