document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;


  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }


  toggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    toggle.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

 
  const sections = document.querySelectorAll(".fade-section");
  const reveal = () => {
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) sec.classList.add("show");
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});


(function() {
  emailjs.init("IFf28riRL_P8kqWKr");
})();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_gvobfur', 'template_5rzz1ob', this)
      .then(() => {
        alert('Mensagem enviada com sucesso! ✅');
        form.reset();
      }, (error) => {
        console.error('Erro:', error);
        alert('❌ Erro ao enviar mensagem. Tente novamente.');
      });
  });
});

