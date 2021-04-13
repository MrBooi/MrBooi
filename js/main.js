// let hamburgerMenu = document.getElementById("bars");
// let mobileMenu = document.getElementById("mobile-menu");

// hamburgerMenu.addEventListener("click", function() {
//   hamburgerMenu.classList.toggle("open");
//   mobileMenu.classList.toggle("visible");
// })

let typeText = document.querySelector("#typeText")
let textToBeTyped = "Ayabonga Booi"
let index = 0, isAdding = true 

function playAnim() {
  setTimeout(function () {

    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      
      if (index > textToBeTyped.length) {
        
        isAdding = false
        
        setTimeout( function () {
          playAnim()
        }, 2000)
        return
      } else {
        
        index++
      }
    } else {
      
      if (index === 0) {
        
        isAdding = true
      } else {
        
        index--
      }
    }
    
    playAnim()
  }, 120)
}

playAnim()