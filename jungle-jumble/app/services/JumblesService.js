import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";

class JumbleService {
  constructor() {
    // console.log('I live');
  }


  callActiveJumble(banana) {
    const mango = AppState.jumbles.find(jumble => jumble.id == banana)
    AppState.activeJumble = mango
    console.log(AppState.activeJumble);
  }

  createWordCard() {
    AppState.activeJumble
    console.log("Head bent over");
  }
}

export const jumblesService = new JumbleService