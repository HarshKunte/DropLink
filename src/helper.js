const { v4: uuidv4 } = require("uuid");

export function createBookmark(data) {
  try {
    const item = { id: uuidv4(), ...data };

    let storageData = JSON.parse(
      localStorage.getItem("bookmarks") ||
        '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}'
    );
    storageData.bookmarks.push(item);
    localStorage.setItem("bookmarks", JSON.stringify(storageData));

    return { success: true, data: storageData };
  } catch (error) {
    return { success: false, error };
  }
}
export function deleteBookmark(itemId) {
  try {
    let storageData = JSON.parse(
      localStorage.getItem("bookmarks") ||
        '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}'
    );
    storageData.bookmarks.splice(
      storageData.bookmarks.findIndex((bookmark) => bookmark.id === itemId),
      1
    );
    console.log(storageData);
    localStorage.setItem("bookmarks", JSON.stringify(storageData));

    return { success: true, data: storageData };
  } catch (error) {
    return { success: false, error };
  }
}
export function getBookmarks() {
  try {
    let storageData = JSON.parse(
      localStorage.getItem("bookmarks") ||
        '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}'
    );

    return { success: true, data: storageData };
  } catch (error) {
    return { success: false, error };
  }
}

export function createGroup(data) {
  try {
    const item = { id: uuidv4(), ...data };

    let storageData = JSON.parse(
      localStorage.getItem("bookmarks") ||
        '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}'
    );
    storageData.groups.push(item);
    localStorage.setItem("bookmarks", JSON.stringify(storageData));

    return { success: true, data: storageData };
  } catch (error) {
    return { success: false, error };
  }
}
export function deleteGroup(groupId) {
  try {
    let storageData = JSON.parse(
      localStorage.getItem("bookmarks") ||
        '{"bookmarks":[], "groups":[{"name":"others", "id":0}]}'
    );
    console.log(storageData);
    let updatedBookmarks = storageData.bookmarks.filter(bookmark => bookmark.group != groupId)
    let updatedGroups = storageData.groups.filter(group => group.id != groupId)
    storageData.bookmarks = updatedBookmarks;
    storageData.groups = updatedGroups;

    console.log(storageData);
    localStorage.setItem("bookmarks", JSON.stringify(storageData));

    return { success: true, data: storageData };
  } catch (error) {
    return { success: false, error };
  }
}


