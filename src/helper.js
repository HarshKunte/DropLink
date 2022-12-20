const uuid = require('uuid');
export async function createBookmark(data){
    
    const item = {id:uuid.v1(), ...data}

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    bookmarks.push(item)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

}