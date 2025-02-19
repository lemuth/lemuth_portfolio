import { createContext, useState } from "react";

// Langage
export const LangageContext = createContext({
    langage: 'fr',
    toggleLangage: () => {},
    bookPage: 0
})

export function LangageContextProvider({children}){
    const [langage, setLangage] = useState('fr')
    const [bookPage, setBookPage] = useState(0)

    const toggleLangage = () => {
        setLangage(langage === 'fr' ? 'en' : 'fr')
    }

    return <LangageContext.Provider value={{langage, toggleLangage, bookPage, setBookPage}}>
        {children}
    </LangageContext.Provider>
}

// Book UI
export const BookPageContext = createContext({
    bookPage: 0
})

export function BookPageContextProvider({children}){
    const [bookPage, setBookPage] = useState(0)

    return <BookPageContext.Provider value={{bookPage, setBookPage}}>
        {children}
    </BookPageContext.Provider>
}
