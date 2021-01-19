class Header extends HTMLElement {
    constructor (){
        super()
        this._shadownDom = this.attachShadow ({mode: 'open'})
        this._shadownDom.innerHTML = `
        <style>
        .header{
            display: flex;
            justify-content: space-between;
            background-color: aqua;
            align-items: center;
            height: 64px;
            padding: 0 50px;
          } 
        </style>
        <div class="header">
    <div>Logo</div>
    <div>
      <div>Avatar</div>
      <div>Log out</div>
    </div>
        </div>
        `
    }
}
window.customElements.define('story-header',Header)