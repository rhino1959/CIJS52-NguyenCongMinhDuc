class UserCard extends HTMLElement {
    constructor () {
        super ()
        this._shadownDom = this.attachShadow({mode: 'open'})
        this.name=this.getAttribute('name') //getAttribute được khai báo sẵn 
        this._shadownDom.innerHTML = `
        <style>
        .card-container img {
            object-fit: cover;
        }
        .card-container {
            width: 286px;
        }
        .name {
            font-weight: 600;
            font-size: 1.5 rem;
        }
        </style>

        <div class="card-container"> 
        <div> <img src="https://media-cdn.laodong.vn/Storage/NewsPortal/2020/5/16/805794/Chu-Cho-Meme.jpg" width="286px" height="180px"> </div>
        <div class="card-body">  
            <div class="name"> ${this.name}</div>
            <div class="des"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur error nostrum molestiae autem laudantium exercitationem esse vero voluptatem ea ad earum, explicabo nemo similique! Expedita perspiciatis laborum dolore repellendus ea.</div>
        </div>
        </div>
        `
    }
    //khi mà component được thực thi vào Dom 
    connectedCallback () {
        console.log('vào đây');
    }
}
window.customElements.define ('user-card', UserCard)