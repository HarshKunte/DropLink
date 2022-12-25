const { v4: uuidv4 } = require('uuid');

export function createBookmark(data){
    
    const item = {id:uuidv4(), ...data}

    let storageData = JSON.parse(localStorage.getItem("bookmarks") || '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}');
    storageData.bookmarks.push(item)
    localStorage.setItem('bookmarks', JSON.stringify(storageData))

    return storageData
}
export function deleteBookmark(itemId){
    
    let storageData = JSON.parse(localStorage.getItem("bookmarks") || '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}');
    storageData.bookmarks.splice(storageData.bookmarks.findIndex(bookmark => bookmark.id === itemId) , 1)
    console.log(storageData);
    localStorage.setItem('bookmarks', JSON.stringify(storageData))

    return storageData
}
export function getBookmarks(){

    let storageData = JSON.parse(localStorage.getItem("bookmarks") || '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}');

    return storageData
}

export function createGroup(data){
    
    const item = {id:uuidv4(), ...data}

    let storageData = JSON.parse(localStorage.getItem("bookmarks") || '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}');
    storageData.groups.push(item)
    localStorage.setItem('bookmarks', JSON.stringify(storageData))

    return storageData
}
