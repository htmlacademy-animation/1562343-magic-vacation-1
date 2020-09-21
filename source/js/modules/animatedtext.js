export default class TypographyTextBuild {
  constructor(
    elemSelectortext,
    timertext,
    classActivate,
    property
  ) {

    this._elemSelectortext = elemSelectortext;
    this._timertext = timertext;
    this._classActivate = classActivate;
    this._property = property;
    this._element = document.querySelector(this._elemSelectortext);
    this._timeOffset = 20;

    this.prePareText();
  }

  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timertext}ms ease-in ${this._timeOffset}ms`;
    if (index % 2 === 0) {
      this._timeOffset += 40;
    } else {
      this._timeOffset -= 20;
    }
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter, index) => {
        fragment.appendChild(this.createElement(latter, index));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classActivate);
  }
}
