import {Arsenal, Edu_VIC_WA_NT_Beginner, Didact_Gothic} from "next/font/google"

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

export {
    arsenal,
    didactGhotic,
    beginner
}