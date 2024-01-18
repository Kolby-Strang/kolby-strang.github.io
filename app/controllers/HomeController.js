import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
    const sections = document.querySelectorAll("section");

    [...sections].forEach((section) => {
      const checkbox = section.querySelector("input");

      checkbox.addEventListener("change", () => {
        section.classList.toggle("enable-animation");
      });
    });
  }
  scrollToElem(elemId) {
    const element = document.getElementById(elemId)
    console.log(element)
    element.scrollIntoView()
  }
}