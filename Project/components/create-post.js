class createPost extends HTMLElement {
    constructor (){
        
        super()
        this._shadownDom = this.attachShadow ({mode: 'open'})
        this._shadownDom.innerHTML = `
        <div id="post">
        <textarea id='text' cols="80" rows="5"></textarea>
        <div><button id ='btn'>Post</button></div>
        </div>    
        `
        
        this._shadownDom.getElementById('btn')
        .addEventListener('click',()=>{
            const data = this._shadownDom.getElementById('text').value
            firebase.firestore().collection('posts').add({data})

        })
        

    }

}
window.customElements.define('create-post',createPost)