const uuid = require('uuid');
export async function createBookmark(data){
    
    const item = {id:uuid.v1(), ...data}

    let storageData = JSON.parse(localStorage.getItem("bookmarks") || '{"bookmarks":[], "groups":[{name:"others", id:0}]}');
    storageData.bookmarks.push(item)
    localStorage.setItem('bookmarks', JSON.stringify(storageData))

    return storageData
}
export function getBookmarks(){

    let storageData = JSON.parse(localStorage.getItem("bookmarks") || '{}');

    return storageData
}