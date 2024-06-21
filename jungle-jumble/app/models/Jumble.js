import { generateId } from "../utils/GenerateId.js";

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.words = data.words


    this.fastestTime = null
    this.typingTime = null
    this.wPM = null
  }

  get JumbleSelectTemplate() {
    return `
            <div class="col-12 d-flex justify-content-around align-items-center mb-2">
              <button class="btn btn-warning rounded-pill" onclick="app.JumblesController.callActiveJumble('${this.id}')">start</button>
              <h5 class="mb-1">${this.name}</h5>
              <p class="mb-1"><i class="mdi mdi-timer"></i>
                ${this.fastestTime ? this.fastestTime : '--'}</p>
              <p class="mb-1">${this.wPM ? this.wPM : '--'} wpm</p>
              </div>
              `
  }

  get JumbleActiveTemplate() {
    return `
    <div class="col-12 jumble-card bg-light">
      <div class="d-flex justify-content-between">
        <h3>${this.name}</h3>
        <h3>Fastest Time: ${this.fastestTime}s</h3>
      </div>
      <p>${this.words}</p>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-12 d-grid gap-2 jumble-card py-3 bg-light">
          <textarea name="body" class="jumbleText" id="jumbleBody" rows="9"></textarea>
          <button class="btn btn-info text-light">Submit!!</button>
        </div>
      </div>
    </div>
    `
  }
}