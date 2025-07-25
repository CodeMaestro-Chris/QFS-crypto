// For the connect wallet modal linking
function connectWallet() {
    window.location.href = "./crypto.html#crypto";
  }

// To the top button 
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const halfway = document.body.scrollHeight / 2;

    if (scrollY > halfway) {
      backToTopBtn.classList.add("show");
      backToTopBtn.classList.remove("hide");
    } else {
      backToTopBtn.classList.remove("show");
      backToTopBtn.classList.add("hide");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
