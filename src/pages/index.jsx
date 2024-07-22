import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import { rtdb } from "@/lib/firebase/firebaseconfig";
import circleMazeTop from "@/assets/img/circle-maze-top.png"
import AutresInfo from "@/components/AutresInfo/AutresInfo";
import CanvasScene from "@/components/CanvasScene/CanvasScene";
import Presentation from "@/components/Presentation/Presentation";
import Experiences from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer/Footer";
import {tr} from "@/components/Translation/Translation"
import {Arsenal, Edu_VIC_WA_NT_Beginner, Didact_Gothic} from "next/font/google"

// Fonts
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

export default function Home() {

  const [ language, setLanguage ] = useState('fr')
  const [ count, setCount ]       = useState()
  const database                  = rtdb;
  // const ref                       = database.ref()

  // ref.on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (errorObject) => {
  //   console.log('The read failed: ' + errorObject.name);
  // });

  async function viewData() {
    onValue(ref(rtdb), snapshot => {
      if(snapshot.exists()){
        const data = snapshot.val()
        console.log('data :', data.visites.count )
        setCount(data.visites.count)
      } else {
        console.log('__counter error')
      }
    })
  }


  // Change language Button
  const changeLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  // useEffect(() => {
  //   // TODO: get
  //   // const actualCount = viewData()
  //   // setCount(actualCount)
  //   viewData().then(() => {
  //     console.log("actualCount :", count )
  //   })
  //   // update(ref(rtdb, 'visites'), {count: 8 + 1})
  // },[])

  // useEffect(() => {
  //   //TODO: send
  //   console.log("coucou", count)
  //   update(ref(rtdb, 'visites'), {count: count +1})
  // },[count, setCount])

  return (
    <main>
      <Head>
        <title>{"Lémuth's Portfolio"}</title>
      </Head>
      <div className={`flex-col justify-center items-center w-screen max-w-full ${arsenal.className} bg-white`}>
        {/* Module de langues */}
        <div className= {`flex justify-center bg-yellowTheme text-redTitle font-normal`}>
          <button onClick={() => {changeLanguage()}} className="hover:scale-125">{tr('lg_button', language)}</button>
        </div>
        {/* Bandeau */}
        <div className={`flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full bg-yellowTheme`}>
          <div className={`flex flex-row sm:flex-col w-full sm:w-[350px] ${didactGhotic.className} justify-center sm:justify-center`}>
            <p className={`sm:w-full w-1/2 text-center uppercase font-bold text-5xl text-redTitle`}>gilles</p>
            <p className={`sm:w-full w-1/2 text-center sm:text-end font-bold text-6xl text-redTitle ${beginner.className}`}>Saley</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative sm:absolute right-0 sm:right-[78px]">
              <p className="text-redTitle text-xl md:text-3xl">{tr("bandeau_title", language)}</p>
              <p className={`text-end line leading-[14px] text-redTitle text-[8px] ${arsenal.className} hover:cursor-zoom-in hover:text-[14px]`}>{tr("bandeau_subtitle", language)}</p>
            </div>
          </div>
          {/* Image circleMaze */}
          <Image src={circleMazeTop} width={150} height={150} alt="circle-maze" className="hidden sm:flex" />
        </div>
        <CanvasScene lg={language} tr={tr} />
        <Presentation lg={language} tr={tr} />
        <Experiences lg={language} tr={tr} />
        <AutresInfo lg={language} tr={tr} />
        <Footer lg={language} tr={tr} />
      </div>
    </main>
  );
}
