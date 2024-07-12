import Image from "next/image"
import portrait from "@/assets/img/portrait_gilles.jpg"
import trombone from "@/assets/img/trombone.png"
import mailIcon from "@/assets/img/mailIcon.png"
import mysterion from "@/assets/img/mysterion.png"

export default function Presentation(){
    return(
        <div className="md:w-[65%] w-full relative flex-col justify-center items-center p-16 md:mt-20 mt-0 shadow-xl">
            <div className="w-full pb-4 text-4xl text-redTitle font-semibold">Pour me présenter</div>
            <div>
                <Image
                    src={portrait}
                    width={85}
                    height={85}
                    alt="portrait"
                    className="rounded-full float-left m-4 shadow-md shadow-redTitle"
                />
                <div className="md:text-xl text-base">
                    <p className="pb-2">{'Vous êtes à la recherche d\'un développeur front-end pour rejoindre votre équipe?'} </p>
                    <p className="pb-2">{'Un développeur passionné par ce qu\'il fait et aimant relever des défis divers ? Je suis peut-être celui que vous recherchez.'} </p>
                    <p className="pb-2">{'Pour me présenter rapidement, j\'ai eu plusieurs vies professionnelles et me suis passionné pour le code il y a 7/8 ans. Je me suis ensuite installé en freelance et ai développé principalement des applications pour des sociétés locales désireuses de mettre à jour leurs process internes. Je me suis toujours attaché à évoluer au fil du temps dans ma technologie de prédilection, le JavaScript.'} </p>
                    <p>{'Lassé par le travail en solitaire, je souhaite aujourd\'hui rejoindre une équipe pour continuer à évoluer, partager mes connaissances et répondre aux besoins des clients, bien sûr ! Si mon profil correspond à ce que vous recherchez, n\'hésitez pas à me contacter et nous aurons le loisir d\'en discuter.'} </p>
                </div>
            </div>
            <div className="absolute z-10 top-0 right-[-13rem] bg-yellowTheme rotate-12">
                <Image src={trombone} width={45} alt="trombone" className="translate-x-28 translate-y-[-1.2rem]" />
                <Image src={mysterion} width={100} alt="mysterion" className="rotate-12 float-right pr-4 duration-500 transition transform scale-100 hover:scale-125" />
                <div className="m-6">
                    <p className="pb-4 text-lg">@Contact:</p>
                    <div className="flex duration-500 transition transform scale-100 hover:scale-125">
                        <Image src={mailIcon} width={25} alt="phoneIcon" />
                        <a href="mailto:gilles.saley@gmail.com">{"gilles.saley@gmail.com"}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}