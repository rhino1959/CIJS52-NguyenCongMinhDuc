import './screens/register-screen.js'
import './screens/login-screen.js'
import './components/input-wrapper.js'
import'./screens/story-screen.js'
import './components/header.js'
import './components/create-post.js'
export function redirect (screenName) {
    if(screenName === 'login') {
        document.querySelector('#app').innerHTML= `<login-screen></login-screen>`
    }
    else if (screenName === 'register') {
        document.querySelector('#app').innerHTML= `<register-screen></register-screen>`
    }
    else if (screenName === 'story') {
        document.querySelector('#app').innerHTML= `<story-screen></story-screen>`
    }
}
firebase.auth().onAuthStateChanged((user) =>{
    if (user) {
        window.currentUser = {
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
        }
        redirect ('story')
    }else {
        redirect('login')
    }
})