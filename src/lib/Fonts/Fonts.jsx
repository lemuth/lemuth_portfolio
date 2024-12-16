import {Arsenal, Edu_VIC_WA_NT_Beginner, Didact_Gothic} from "next/font/google"
import localFont from 'next/font/local'

const arsenal = Arsenal({
    subsets: ['latin'],
    weight: '400'
})
const didactGhotic = Didact_Gothic({
    subsets: ['latin'],
    weight: '400'
})
const beginner = Edu_VIC_WA_NT_Beginner({
    subsets: ['latin'],
    weight: '400'
})

const playwriteHRLijeva = localFont({
    src: "../../assets/fonts/PlaywriteHRLijeva-VariableFont_wght.ttf",
    weight: '400',
    display: 'swap',
})

export {
    arsenal,
    didactGhotic,
    beginner,
    playwriteHRLijeva
}