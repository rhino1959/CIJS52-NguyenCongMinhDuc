import { redirect } from '../index.js'
const style = `
  #register-form {
    width: 40%;
    margin: AUTO;
    text-align: center;
    background: #dbdbdb;
    height: 100%;
    padding-top: 3%;
  }
  .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .container {
    height: 100vh;
  }
`
class StoryScreen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode:"open"})
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="container">
        <form id="register-form">
          <div class="title">Welcom ${firebase.auth().currentUser.displayName}</div>
          <div id="redirect">Log Out</div>
        </form>
      </div>
    `
    this._shadowRoot.getElementById('redirect')
    .addEventListener('click', () =>{
      redirect('login');
    })
  }
}
window.customElements.define('story-screen', StoryScreen)