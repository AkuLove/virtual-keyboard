interface ExtendedUserData extends EventTarget {
  isClick: boolean;
  _isClick: boolean;
}

document.querySelectorAll(".dropdown__button").forEach(button => {
  button.addEventListener("click", function(event) {
      document.querySelectorAll(".dropdown__item").forEach(item => {
        if (item.querySelector('.dropdown__button') !== button) {
          item.classList.remove("dropdown__item_open")
        }
      });
      (event.target as ExtendedUserData).isClick = true
      button.parentElement?.classList.toggle("dropdown__item_open")
  })
});

document.body.addEventListener("click", function(event) {
  if ((event.target as ExtendedUserData)._isClick == true || 
  (event.target as HTMLInputElement).classList.contains("dropdown__button") == true ||
  (event.target as HTMLInputElement).classList.contains("dropdown-menu") == true
  ) return
  document.querySelectorAll(".dropdown__item").forEach(item => {
      item.classList.remove("dropdown__item_open")
  })
})

