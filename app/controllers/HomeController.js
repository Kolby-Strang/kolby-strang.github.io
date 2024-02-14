export class HomeController {
  scrollToElem(elemId) {
    const element = document.getElementById(elemId)
    if (element) {
      element.scrollIntoView()
      return
    }
  }
  upgradeImgQuality(hiElement) {
    const hiElemId = hiElement.id
    const loElemId = 'lo' + hiElemId.substring(2)
    const loElement = document.getElementById(loElemId)
    if (loElement) {
      loElement.classList.add('hidden')
      hiElement.classList.remove('hidden')
      return
    }
  }
}