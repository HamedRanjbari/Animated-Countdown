const $ = document;
const numbers = $.querySelectorAll(".numbers span")
const counter = $.querySelector(".counter")
const Message = $.querySelector(".final")
const replay = $.querySelector("#replay")

runTheAnimation()

function reset() {
  counter.classList.remove("hidden")
  Message.classList.remove("show")

  numbers.forEach((num) => {
    num.classList.value = ""
  })

  numbers[0].classList.add("enter");
}

function runTheAnimation() {
  numbers.forEach((num, idx) => {
    const nextToLast = numbers.length - 1

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "startAnimation" && idx != nextToLast) {
        num.classList.remove("enter");
        num.classList.add("out")
      } else if (e.animationName === "endAnimation" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("enter");
      } else {
        counter.classList.add("hidden")
        Message.classList.add("show")
      }
    })
  })
}

replay.addEventListener("click", () => {
  reset()
  runAnimation()
})