import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({children}){

    const [bookmarks, setBookmarks] = useState({})

    const [editingBookmark, setEditingBookmark] = useState(null)

    return <Context.Provider value={{bookmarks, setBookmarks, editingBookmark, setEditingBookmark}}>
        {children}
    </Context.Provider>
}

export default Context