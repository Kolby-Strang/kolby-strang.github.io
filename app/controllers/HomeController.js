import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  scrollToElem(elemId) {
    const element = document.getElementById(elemId)
    console.log(element)
    element.scrollIntoView()
  }
}