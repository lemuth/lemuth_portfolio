import Tr from "@/lib/Translation/Translation";
import { useContext, useEffect, useRef, useState } from "react"
import { LangageContext } from "@/hooks/contextProvider"
import { prezContent } from "@/lib/Data/Data";
import Image from "next/image"
import portrait from "@/assets/img/portrait_gilles.jpg"
import trombone from "@/assets/img/trombone.png"
import mailIcon from "@/assets/img/mailIcon.png"
import mysterion from "@/assets/img/mysterion.png"
import { mulish } from "@/lib/Fonts/googleFonts";

export default function TypingPrez() {

    const { langage } = useContext(LangageContext);
    const steps = prezContent(langage)
    const [text, setText] = useState([]) // contient des paragraphe de texte
    const [isVisible, setIsVisible] = useState(false)
    const contentRef = useRef()


    // l'animation se déclenche lorsque l'utilisateur scroll sur la section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.5 } // Déclenche quand 50% de la section est visible
        )

        if (contentRef.current) observer.observe(contentRef.current);

        return () => observer.disconnect();
    },[])

    useEffect(() => {
        if(!isVisible) return
        
        let isMounted = true

        async function typingMachineSim() {

            let currentText = ""
            let paragrapheList = []

            for( const [index, step] of steps.entries()) {
                if(!isMounted) return
                let time = 40

                if(step.action === "type"){
                    for(const char of step.text) {

                            // gestion du flux
    
                            if(/[.?]/.test(char)) {time = 500}
    
                            // gestion des paragraphes
                            if(char === "\n"){
                                paragrapheList.push(currentText)
                                currentText = ""
                            } else {
                                currentText += char
                            }
    
                            setText([...paragrapheList, currentText])
                            await new Promise((resolve) => setTimeout(resolve, time))

                    }
                } else if (step.action === "delete") {
                    for (let i = 0; i < step.count; i++) {
                        if(!isMounted) return

                        currentText = currentText.slice(0, -1)
                        setText([...paragrapheList, currentText])
                        await new Promise((resolve) => setTimeout(resolve, time))
                    }
                }
                if(index === 2) {
                    await new Promise((resolve) => setTimeout(resolve, 1500))
                    setText([])
                    currentText = ""
                    paragrapheList = []
                }
            }
            if (currentText) paragrapheList.push(currentText);
            setText(paragrapheList);
        }

        typingMachineSim()

        return () => {
            isMounted = false
        }
    }, [langage, isVisible])


    return(
        <div className={`flex flex-col justify-center items-center w-full relative ${mulish.className}`} ref={contentRef}>
            <div className="flex flex-col justify-center w-full md:w-[65%] p-4 md:p-16 mt-20 pb-20 md:pb-32 shadow-xl mb-32 md:mb-0 pt-0 md:pt-32">
                {/* Block title */}
                <h2 className="w-full pb-4 text-4xl text-redTitle font-semibold"><Tr target="prez_title" /></h2>
                {/* Block content */}
                <div className="w-full">
                    <Image
                        src={portrait}
                        width={85}
                        height={85}
                        alt="portrait"
                        className="float-left m-4 rounded-full shadow-md shadow-redTitle"
                        style={{ width: '85px', height: '85px' }}
                        priority
                    />
                    <div className="md:text-xl text-base">
                        {
                            text.map((paragraph, index) => {
                                if(index === 3) {
                                    return(
                                        <p key={index} className="pb-2 text-end">{paragraph}</p>
                                    )
                                }else {
                                    return (
                                        <p key={index} className="pb-2">{paragraph}</p>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                {/* Rappel Contact */}
                <div className="hidden md:block md:absolute z-10 top-0 right-10 bg-yellowTheme rotate-12">
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
        </div>
    )
}