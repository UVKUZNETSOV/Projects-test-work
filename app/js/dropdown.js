const dropDowns = document.querySelectorAll('.dropdown');
const dropDownContent = document.querySelectorAll('.dropdown-content');

dropDowns.forEach(dropdown => {
  const select = dropdown.querySelector('.dropdown-btn'); 
  const menu = dropdown.querySelector('.dropdown-content'); 
  const whiteButton = document.querySelector('.dropdown-btn');
  const contentSize = dropdown.getBoundingClientRect();
  const buttonSize = whiteButton.getBoundingClientRect();

  select.addEventListener('click', () => {
    menu.classList.toggle('dropdown-content_open');
    whiteButton.classList.toggle('dropdown-bg');
  })

  window.addEventListener("click", e => {
  
    if (
      e.clientX < contentSize.left || e.clientX > contentSize.right || e.clientY < contentSize.top || e.clientY > contentSize.bottom
    ) {
      menu.classList.remove('dropdown-content_open');
    }
    if (
      e.clientX < buttonSize.left || e.clientX > buttonSize.right || e.clientY < buttonSize.top || e.clientY > buttonSize.bottom
    ) {
      whiteButton.classList.remove('dropdown-bg');
    }
  })
})

