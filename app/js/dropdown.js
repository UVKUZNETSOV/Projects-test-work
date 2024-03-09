const dropDowns = document.querySelectorAll('.dropdown');
const dropDownContent = document.querySelectorAll('.dropdown-content');

dropDowns.forEach(dropdown => {
  const select = dropdown.querySelector('.dropdown-btn'); 
  const menu = dropdown.querySelector('.dropdown-content'); 
  const size = dropdown.getBoundingClientRect();

  select.addEventListener('click', () => {
    menu.classList.toggle('dropdown-content_open');
  })

  window.addEventListener("click", e => {
  
    if (
      e.clientX < size.left || e.clientX > size.right || e.clientY < size.top || e.clientY > size.bottom
    ) {
      menu.classList.remove('dropdown-content_open')
    }
  })
})

