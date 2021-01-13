const style = `
  .error{
    color: red;
  }
`
class InputWrapper extends HTMLElement{
  constructor() {
    super()
    this._shadowDom = this.attachShadow({mode: 'open'})
    this.type = this.getAttribute('type')
    this.placeholder = this.getAttribute('placeholder')
    console.log(this.error)
    this._shadowDom.innerHTML = `
      <style>
        ${style}
      </style>
      <div>
        <input type="${this.type}" placeholder="${this.placeholder}">
        <div class="error"></div>
      </div>
    `
  }
  // đăng ký lắng nghe thay đổi ở những attribute nào
  static get observedAttributes(){
    return ['error']
  }
  // sẽ được gọi khi attribute thay đổi
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'error') {
      this._shadowDom.querySelector('.error').innerText = newValue
    }
  }
  get value() {
    return this._shadowDom.querySelector('input').value
  }
  set value(value) {
    this._shadowDom.querySelector('input').value = value
  }
  setErr(err) {
    this._shadowDom.querySelector('.error').innerText = err
  }
}
window.customElements.define('input-wrapper', InputWrapper)