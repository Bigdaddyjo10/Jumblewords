import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {
  constructor() {
    // console.log('I Exist!');
    this.drawJumbleSelects()
  }

  drawJumbleSelects() {
    const jumbles = AppState.jumbles
    let jumbleString = ``
    jumbles.forEach(jumble => jumbleString += jumble.JumbleSelectTemplate)
    setHTML('jumbleSelect', jumbleString)
    // console.log('I did it');
  }

  callActiveJumble(jumbleId) {
    // console.log("I'm working dawg ☕", jumbleId);
    jumblesService.callActiveJumble(jumbleId)
  }

  drawActiveJumble() {
    const activeJumble = AppState.activeJumble
    let activeHTML = activeJumble.JumbleActiveTemplate
    setHTML('jumbleCard', activeHTML)
  }

  drawWords() {
    event.preventDefault()
    const form = event.target
    const wordData = getFormData(form)
    const wordCard = AppState.jumbles
    jumblesService.createWordCard
    let innerHTMLString = ''
    wordCard.find((word) => innerHTMLString += word.JumbleActiveTemplate)
    setHTML('jumbleCard', innerHTMLString)
    console.log(wordData);
  }
}
