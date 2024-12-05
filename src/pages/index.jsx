import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, child, update } from "firebase/database";
import { rtdb } from "@/lib/firebase/firebaseconfig";
import circleMazeTop from "@/assets/img/circle-maze-top.png"
import AutresInfo from "@/components/AutresInfo/AutresInfo";
import CanvasScene from "@/components/CanvasScene/CanvasScene";
import Presentation from "@/components/Presentation/Presentation";
import Experiences from "@/components/Experiences/Experiences";
import ProjetsPerso from "@/components/ProjetsPerso/ProjetsPerso";
import Bonus3d from "@/components/Bonus3d/Bonus3d";
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

  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `visites`)).then((snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val().count;
        update(ref(rtdb, 'visites'), {count: value +1})
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])


  // Change language Button
  const changeLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <main>
      <Head>
        <title>{"Gilles Saley développeur Front-end React"}</title>
        <meta name="description" content="Découvrez mon portfolio : projets, expériences, et compétences." />
        <meta property="og:title" content="Gilles Saley - Portfolio" />
        <meta property="og:description" content="Découvrez mon portfolio : projets, expériences, et compétences." />
        <meta property="og:url" content="https://lemuth.github.io/lemuth_portfolio/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={`flex-col justify-center items-center w-screen max-w-full ${arsenal.className} bg-gray-100 text-black`}>
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
              <h1 className="text-redTitle text-xl md:text-3xl">{tr("bandeau_title", language)}</h1>
              <p className={`text-end line leading-[14px] text-redTitle text-[8px] ${arsenal.className} hover:cursor-zoom-in hover:text-[14px]`}>{tr("bandeau_subtitle", language)}</p>
            </div>
          </div>
          {/* Image circleMaze */}
          <Image src={circleMazeTop} width={150} height={150} alt="circle-maze" className="hidden sm:flex" />
        </div>
        <CanvasScene lg={language} tr={tr} />
        <Presentation lg={language} tr={tr} />
        <Experiences lg={language} tr={tr} />
        <ProjetsPerso lg={language} tr={tr} />
        <AutresInfo lg={language} tr={tr} />
        <Bonus3d  lg={language} tr={tr} />
        <Footer lg={language} tr={tr} />
      </div>
    </main>
  );
}
