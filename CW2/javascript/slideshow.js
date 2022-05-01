
const buttons = document.querySelectorAll("[data-slideshow-button]") //buttons as name of variable, querySelector of slideshow buttons

buttons.forEach(button => {  //adding addEventListener for each button, allows to set up function when specific events happen (click -> swap to the next image)
  button.addEventListener("click", () => {
    const offset = button.dataset.slideshowButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-slideshow]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]") //active slide with data-active attribute as the first
    let newIndex = [...slides.children].indexOf(activeSlide) + offset //converts slides to an array (ordered list of values)
    if (newIndex < 0) newIndex = slides.children.length - 1 //if going back past first image, go to the last one
    if (newIndex >= slides.children.length) newIndex = 0 //if going past last image, loop to the first img

    slides.children[newIndex].dataset.active = true //adds data set active attribute to currently active slide
    delete activeSlide.dataset.active //removes it from the slide that was active before
  })
})
