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
  upgradeImgQuality(hiElement) {
    console.log('hi');
    const hiElemId = hiElement.id
    const loElemId = 'lo' + hiElemId.substring(2)
    console.log(loElemId);
    const loElement = document.getElementById(loElemId)
    if (loElement) {
      loElement.classList.add('hidden')
      hiElement.classList.remove('hidden')
      return
    }
    console.log('no');
  }
}