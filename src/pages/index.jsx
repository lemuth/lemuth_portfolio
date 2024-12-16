import { useEffect, useState } from "react";
import { getDatabase, ref, get, child, update } from "firebase/database";
import { rtdb } from "@/lib/firebase/firebaseconfig";
import Header from "@/components/Header/Header";
import Bandeau from "@/components/Bandeau/Bandeau";
import AutresInfo from "@/components/AutresInfo/AutresInfo";
import CanvasScene from "@/components/CanvasScene/CanvasScene";
import Presentation from "@/components/Presentation/Presentation";
import Experiences from "@/components/Experiences/Experiences";
import ProjetsPerso from "@/components/ProjetsPerso/ProjetsPerso";
import Bonus3d from "@/components/Bonus3d/Bonus3d";
import Footer from "@/components/Footer/Footer";
import { tr } from "@/components/Translation/Translation"
import { arsenal } from "@/lib/Fonts/Fonts";

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
      <Header />
      <div className={`flex-col justify-center items-center w-screen max-w-full ${arsenal.className} bg-gray-100 text-black`}>
        {/* Module de langues */}
        <div className= {`flex justify-center bg-yellowTheme text-redTitle font-normal`}>
          <button onClick={() => {changeLanguage()}} className="hover:scale-125">{tr('lg_button', language)}</button>
        </div>
        <Bandeau lg={language} tr={tr} />
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
