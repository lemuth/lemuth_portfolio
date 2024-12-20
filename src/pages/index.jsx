import { useEffect, useState } from "react";
import { getDatabase, ref, get, child, update } from "firebase/database";
import { rtdb } from "@/lib/firebase/firebaseconfig";
import LangageSwitcher from "@/components/LangageSwitcher/LangageSwitcher";
import Header from "@/components/Header/Header";
import Bandeau from "@/components/Bandeau/Bandeau";
import AutresInfo from "@/components/AutresInfo/AutresInfo";
import CanvasScene from "@/components/CanvasScene/CanvasScene";
import Presentation from "@/components/Presentation/Presentation";
import Experiences from "@/components/Experiences/Experiences";
import ProjetsPerso from "@/components/ProjetsPerso/ProjetsPerso";
import Bonus3d from "@/components/Bonus3d/Bonus3d";
import Footer from "@/components/Footer/Footer";
import { arsenal } from "@/lib/Fonts/googleFonts";

export default function Home() {

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

  return (
    <main>
      <Header />
      <div className={`flex-col justify-center items-center w-screen max-w-full ${arsenal.className} bg-gray-100 text-black`}>
        <LangageSwitcher />
        <Bandeau />
        <CanvasScene />
        <Presentation />
        <Experiences />
        <ProjetsPerso />
        <AutresInfo />
        <Bonus3d  />
        <Footer />
      </div>
    </main>
  );
}
