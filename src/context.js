import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({children}){

    const [bookmarks, setBookmarks] = useState({})

    return <Context.Provider value={{bookmarks, setBookmarks}}>
        {children}
    </Context.Provider>
}

export default Context