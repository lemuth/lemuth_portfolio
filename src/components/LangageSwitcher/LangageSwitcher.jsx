import { useContext } from "react"
import { LangageContext } from "@/hooks/contextProvider"
import Tr from "@/lib/Translation/Translation";

export default function LangageSwitcher(){
    const { toggleLangage } = useContext(LangageContext)

    return (
        <div className= {`flex justify-center bg-yellowTheme text-redTitle font-normal`}>
            <button
            onClick={() => {toggleLangage()}}
            className="hover:scale-125">
                <Tr target='lg_button' />
            </button>
        </div>
    )
}
