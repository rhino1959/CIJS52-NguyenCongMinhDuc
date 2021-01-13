//READ ONE  
getOneDocument()
async function getOneDocument() {
    const docID = '1TpLVWrOiqXWRIchFDl3'
    // promise
    // truy cập vào firebase ->truy cập vào firestore ->truy cập vào collection có tên users ->truy cập vào doc, truyền biến docID vào doc sau đó trả về kết quả qua get()
    // firebase.firestore().collection('users').doc(docID).get()
    // .then((res) => {
    //     console.log(res.data());
    // })
    //async await
    const res = await firebase.firestore().collection('users').doc(docID).get()
    const user = getDataFromDoc(res)
    console.log(user);
}

//READ MULTI
getManyDocument()
async function getManyDocument (){
    const res = await firebase.firestore().collection('users').get() 
    const users =getDataFromDocs(res.docs)
    console.log(users);
}

function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
}
function getDataFromDocs (docs) {
    // const arr = []
    // for (const item of docs){
    //     arr.push(getDataFromDoc(item))
    // }
    // return arr
    return docs.map(getDataFromDoc)
}
// addDocument()

    // function addDocument () {
    //     const dataToAdd = {
    //         name: 'ABC',
    //         address: 'HN'
    //     }
    //     firebase.firestore().collection('users').add(dataToAdd)
    // }
//UpdateDocments
// updateDocument()
// function updateDocument() {
//     const idUpdate = '1AcEHY9J7tBxRS1eNjJK'
//     const dataToUpdate = {
//         address:'TPHCM',
//         phone: firebase.firestore.FieldValue.arrayUnion ('0987654321')
//     }
//     firebase.firestore().collection('users').doc(idUpdate).update(dataToUpdate)
// }
//DeleteDocument
deleteDocument ()
function deleteDocument () {
    const docID = '1AcEHY9J7tBxRS1eNjJK'
    firebase.firestore().collection('users').doc(docID).delete()
}   