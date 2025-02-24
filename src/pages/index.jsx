import { useEffect } from "react";
import { getDatabase, ref, get, child, update } from "firebase/database";
import { rtdb } from "@/lib/firebase/firebaseconfig";
import LangageSwitcher from "@/components/LangageSwitcher/LangageSwitcher";
import Header from "@/components/Header/Header";
import Bandeau from "@/components/Bandeau/Bandeau";
import AutresInfo from "@/components/AutresInfo/AutresInfo";
import CanvasScene from "@/components/CanvasScene/CanvasScene";
import Experiences from "@/components/Experiences/Experiences";
import ProjetsPerso from "@/components/ProjetsPerso/ProjetsPerso";
import Footer from "@/components/Footer/Footer";
import BookScene from "@/components/Book/BookScene";
import { arsenal } from "@/lib/Fonts/googleFonts";
import { BookPageContextProvider } from "@/hooks/contextProvider";
import TypingPrez from "@/components/TypingPrez/TypingPrez";

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
        <TypingPrez />
        <Experiences />
        <ProjetsPerso />
        <AutresInfo />
        <BookPageContextProvider>
          <BookScene />
        </BookPageContextProvider>
        <Footer />
      </div>
    </main>
  );
}
