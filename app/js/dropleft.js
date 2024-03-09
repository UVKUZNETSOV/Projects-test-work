const dropLefts = document.querySelectorAll('.dropleft');

dropLefts.forEach(dropleft => {
  const select = dropleft.querySelector('.dropleft-btn'); 
  const menu = dropleft.querySelector('.dropleft-content'); 

  select.addEventListener('click', () => {
    menu.classList.toggle('dropleft-content_open');
  })

  window.addEventListener("click", e => {
    const size = dropleft.getBoundingClientRect();
  
    if (
      e.clientX < size.left || e.clientX > size.right || e.clientY < size.top || e.clientY > size.bottom
    ) {
      menu.classList.remove('dropleft-content_open')
    }
  })
})

