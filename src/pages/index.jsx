import Image from "next/image";
import circleMazeTop from "@/assets/img/circle-maze-top.png"
import AutresInfo from "@/components/AutresInfo/AutresInfo";
import CanvasScene from "@/components/CanvasScene/CanvasScene";
import Presentation from "@/components/Presentation/Presentation";
import Experiences from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer/Footer";
import {Arsenal, Poppins} from "next/font/google"

const arsenal = Arsenal({
  subsets: ['latin'],
  weight: '400'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {

  return (
    <main
      className={`flex flex-col justify-center items-center w-full h-full ${arsenal.className}`}
    >
      {/* Bandeau */}
      <div className={`flex justify-between items-center w-full bg-yellowTheme`}>
        <div className={`flex-col w-[350px] ${poppins.className}`}>
          <p className={`text-center uppercase font-bold text-6xl text-redTitle`}>gilles</p>
          <p className={`text-end uppercase font-bold text-6xl text-redTitle`}>saley</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="absolute right-[78px]">
            <p className="text-redTitle text-3xl">Développeur Front-End</p>
            <p className={`text-end text-redTitle text-[8px] ${arsenal.className}`}>Mais un peu Full Stack aussi</p>
          </div>
          <Image src={circleMazeTop} width={150} height={150} alt="circle-maze" />
        </div>
      </div>
      <CanvasScene />
      <Presentation />
      <Experiences />
      <AutresInfo />
      <Footer />
    </main>
  );
}
