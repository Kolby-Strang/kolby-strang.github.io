import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
    return
  }
  scrollToElem(elemId) {
    const element = document.getElementById(elemId)
    if (element) {
      element.scrollIntoView()
      return
    }
  }
}