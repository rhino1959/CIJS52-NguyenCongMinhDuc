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
class RegisterScreen extends HTMLElement{
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
          <input-wrapper id="name" type="text" placeholder="Full name" ></input-wrapper>
          <input-wrapper id="email" type="email" placeholder="Email" ></input-wrapper>
          <input-wrapper id="pass" type="password" placeholder="Password" ></input-wrapper>
          <input-wrapper id="confirm-pass" type="password" placeholder="Confirm password" ></input-wrapper>
          <button class="btn">Register</button>
          <div id="redirect">Already have an account? Login</div>
        </form>
      </div>
    `
    this._shadowRoot.getElementById('redirect')
    .addEventListener('click', () =>{
      redirect('login');
    })
    this._shadowRoot.getElementById('register-form')
    .addEventListener('submit', (e) => {
      e.preventDefault()
      const name = this._shadowRoot.getElementById('name').value
      const email = this._shadowRoot.getElementById('email').value
      const pass = this._shadowRoot.getElementById('pass').value
      const confirmPass = this._shadowRoot.getElementById('confirm-pass').value
      
      let isValue=true
      

      if (name.trim() === '') {
        this._shadowRoot.getElementById('name')
        .setAttribute('error', 'Please input full name')
        isValue=false;
      }
      else {
        this._shadowRoot.getElementById('name').setAttribute('error', '')
      }
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
      if (confirmPass.trim() === '') {
        this._shadowRoot.getElementById('confirm-pass').setAttribute('error', 'Please confirm your password')
        isValue=false;
      }
      else if (confirmPass!== pass){
        this._shadowRoot.getElementById('confirm-pass').setAttribute('error', 'Password do not match')
        isValue=false;  
      }
      else {
        this._shadowRoot.getElementById('confirm-pass').setAttribute('error', '')
      }
      if (isValue) {
       firebase.auth().createUserWithEmailAndPassword(email, pass)
       .then((res) => {
        alert ('Register Success')
        firebase.auth().currentUser.sendEmailVerification()
        firebase.auth().currentUser.updateProfile({
          displayName: name
        })
        redirect ('login')
       })
       .catch ((err)=> {
         alert (err.message)
       })
      }
    })
  }
}
window.customElements.define('register-screen', RegisterScreen)