import { redirect } from '../index.js'
import {emailValid} from '../utils.js'
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

class LoginScreen extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode:"open"})
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="container">
        <form id="register-form">
          <div class="title">Share story</div>
          <input-wrapper id="email" type="email" placeholder="Email" ></input-wrapper>
          <input-wrapper id="pass" type="password" placeholder="Password" ></input-wrapper>
          <button class="btn">Login</button>
          <div id="redirect">Don't have acount? Register</div>
        </form>
      </div>
    `
    
    this._shadowRoot.getElementById('redirect')
    .addEventListener('click', () =>{
      redirect('register');
    })
    this._shadowRoot.getElementById('register-form')
    .addEventListener('submit', (e) => {
      e.preventDefault()
      const email = this._shadowRoot.getElementById('email').value
      const pass = this._shadowRoot.getElementById('pass').value      
      let isValue=true
      

      
      if (email.trim() === ''){
        this.shadowRoot.getElementById('email').setAttribute('error', 'Please input email')
        isValue=false;
      }
      else if (emailValid(email)===false) {
        this._shadowRoot.getElementById('email').setAttribute('error','Email is not valid')
        isValue=false;
      }
      else {
        this._shadowRoot.getElementById('email').setAttribute('error','')
      }
      if (pass.trim() === '') {
        this._shadowRoot.getElementById('pass').setAttribute('error', 'Please input your password')
        isValue=false;
      }
      else {
        this._shadowRoot.getElementById('pass').setAttribute('error', '')
      }
      if (isValue) {
       firebase.auth().signInWithEmailAndPassword(email, pass)
       .then((res) => {
        console.log(res);
        if (!res.user.emailVerified) {
          alert ('Please verified your email address')
          return
        }
        const user = {
          email: res.user.email,
          displayName: res.user.displayName,
          id: res.user.uid
        }
        window.currentUser=user;
        redirect ('story')
       })
      }
    })
  }
}
window.customElements.define('login-screen', LoginScreen)