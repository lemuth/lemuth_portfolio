import { createContext, useState } from "react";

export const LangageContext = createContext({
    langage: 'fr',
    toggleLangage: () => {}
})

export function LangageContextProvider({children}){
    const [langage, setLangage] = useState('fr')

    const toggleLangage = () => {
        setLangage(langage === 'fr' ? 'en' : 'fr')
    }

    return <LangageContext.Provider value={{langage, toggleLangage}}>
        {children}
    </LangageContext.Provider>
}
