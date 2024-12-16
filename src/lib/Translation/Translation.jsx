import { useContext } from "react"
import { LangageContext } from "@/hooks/contextProvider"
import { translator } from "@/lib/Data/Data"

export default function Tr({ target }) {
    const { langage } = useContext(LangageContext);
    return translator[langage][target];
}