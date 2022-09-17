const bar = document.getElementById("bar")
const menu = document.getElementById("menu")
const nav = document.querySelectorAll(".nav")

bar.addEventListener("click", () => {
  if(menu.classList.contains("hidden")) {
    menu.classList.remove("hidden")
  } else {
    menu.classList.add("hidden")
  }
})

nav.forEach((e) => {
  e.addEventListener("click", (e) => {

    nav.forEach((item) => {
      if(item !== e) {
        item.classList.remove("active")
      }
      
    })

    e.currentTarget.classList.toggle("active")
  })
})
