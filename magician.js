window.addEventListener('load', () => {
    document.body.style.opacity = 1;
  });


  const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
  });

   const hiddenElements = document.querySelectorAll(".hidden");

   hiddenElements.forEach((el)=> observer.observe(el));


// Up Arrow functionality
const upArrow = document.getElementById('up-arrow');
const nav = document.querySelector('nav');

if (upArrow && nav) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        upArrow.classList.add('show');
      } else {
        upArrow.classList.remove('show');
      }
    });
  }, { threshold: 0 });
  navObserver.observe(nav);

  upArrow.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Let browser handle the scroll first
    setTimeout(() => {
      // Remove the hash from URL without reloading
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }, 10);
  });
});

   