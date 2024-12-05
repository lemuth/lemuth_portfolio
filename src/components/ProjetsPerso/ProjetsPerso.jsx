import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import kyle from "@/assets/img/kyle.png"
import double_arrow from "@/assets/img/double_arrow.png"
import { Edu_VIC_WA_NT_Beginner } from "next/font/google"

const beginner = Edu_VIC_WA_NT_Beginner({
    subsets: ['latin'],
    weight: '400'
})


export default function ProjetsPerso(props){

    const { lg, tr } = props

    const [ needDropdownTool, setNeedDropdownTool ] = useState(false)
    const [ width, setWidth ]  = useState(null)
    const [ articleOpen, setArticleOpen ] = useState(null)
    const articleRef = useRef({})


    function activDropDown(art){
        setArticleOpen(articleOpen === null || articleOpen !== art ? art : null)
    }
    
    function setArticleRef(key, element){
        articleRef.current[key] = element
    }

    useEffect(() => {
        if (typeof window === 'undefined') return;

        function handleResize() {
            setWidth(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        width <= 500 ? setNeedDropdownTool(true) : setNeedDropdownTool(false)

        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    return (
        <div className="flex flex-col justify-center items-center w-full relative">
            <div className="flex flex-col justify-center w-full md:w-[65%] p-4 md:p-16 mt-20 pb-20 md:pb-32 shadow-xl mb-32 md:mb-0 pt-0 md:pt-32">
                {/* Block title */}
                <div className="flex flex-col md:flex-row">
                    <h2 className="w-full pb-4 text-4xl text-redTitle font-semibold">{tr("pp_title", props.lg)}</h2>
                    <div className="flex justify-end">
                        <Image src={kyle} width={100} alt="kyle-md" className="hidden md:flex mr-16 hover:animate-spin" />
                        <Image src={kyle} width={70} alt="kyle-xs" className="md:hidden" />
                    </div>
                </div>
                {/* Block content */}
                <div className="w-full pt-8">
                    <div className="md:text-xl text-base">

                        <p className="pb-2">{tr('pp_intro', lg)}</p>
                        <p className="pb-2">{tr('pp_intro_2', lg)}</p>

                        {/* article Sofa */}
                        <div className="flex flex-col justify-center items-center pt-6">
                            <div
                                className={`${needDropdownTool ? `bg-yellowTheme w-full text-center py-2 rounded-lg flex justify-center items-center hover:cursor-pointer select-none` : "self-start" }`}
                                onClick={() => {needDropdownTool && activDropDown("sofa")}}
                            >
                                <h2 className={`pb-2 text-2xl ${!needDropdownTool && "underline"}  mx-auto pl-10 ${beginner.className}`}>{tr('pp_four_title', lg)}</h2>
                                {
                                    needDropdownTool &&
                                    <div className="self-center ml-auto">
                                        <Image
                                            src={double_arrow}
                                            alt="arrow"
                                            width={30}
                                            className={`${articleOpen === "sofa" && "rotate-180" }`}
                                        />
                                    </div>
                                }
                            </div>
                            <div
                                className={`pt-4 inline w-[80%] overflow-hidden  transition-all duration-500 ease-in-out`}
                                style={
                                    needDropdownTool ? {
                                        height: articleOpen === "sofa" ? `${articleRef.current[0].scrollHeight}px` : "0",
                                    }
                                    :undefined
                                }
                                ref={(el) => setArticleRef(0, el) }
                            >
                                <p className="w-[80%] inline text-center">{tr('pp_four_content_one', lg)}</p>
                                <a
                                    href="https://www.linkedin.com/in/laurent-desjardins-905ab48/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline text-redTitle underline duration-500 transition transform scale-100 hover:scale-125"
                                >
                                    Laurent Desjardins
                                </a>
                                <p className="w-[80%] inline text-center">{tr('pp_four_content_two', lg)}</p>
                            </div>
                        </div>
                        {/* article Gibiti */}
                        <div className="flex flex-col justify-center items-center pt-6">
                            <div
                                className={`${needDropdownTool ? `bg-yellowTheme w-full text-center py-2 rounded-lg flex justify-between items-center hover:cursor-pointer select-none` : "self-start" }`}
                                onClick={() => {needDropdownTool && activDropDown("gibiti")}}
                            >
                                <h2 className={`pb-2 text-2xl ${!needDropdownTool && "underline"}  mx-auto pl-10 ${beginner.className}`}>{tr('pp_two_title', lg)}</h2>
                                {
                                    needDropdownTool &&
                                    <div className="self-center ml-auto">
                                        <Image
                                            src={double_arrow}
                                            alt="arrow"
                                            width={30}
                                            className={`${articleOpen === "gibiti" && "rotate-180" }`}
                                        />
                                    </div>
                                }
                            </div>
                            <div
                                className={`pt-4 inline w-[80%] overflow-hidden  transition-all duration-500 ease-in-out`}
                                style={
                                    needDropdownTool ? {
                                        height: articleOpen === "gibiti" ? `${articleRef.current[1].scrollHeight}px` : "0",
                                    }
                                    : undefined
                                }
                                ref={(el) => setArticleRef(1, el) }
                            >
                                <p className="w-[80%] inline text-center">{tr('pp_two_content', lg)}</p>
                            </div>
                        </div>

                        {/* article convertisseur d'images */}
                        <div className="flex flex-col justify-center items-center pt-6">
                            <div
                                className={`${needDropdownTool ? `bg-yellowTheme w-full text-center py-2 rounded-lg flex justify-between items-center hover:cursor-pointer select-none` : "self-start" }`}
                                onClick={() => {needDropdownTool && activDropDown("converter")}}
                            >
                                <h2 className={`pb-2 text-2xl ${!needDropdownTool && "underline"}  mx-auto pl-10 ${beginner.className}`}>{tr('pp_one_title', lg)}</h2>
                                {
                                    needDropdownTool &&
                                    <div className="self-center ml-auto">
                                        <Image
                                            src={double_arrow}
                                            alt="arrow"
                                            width={30}
                                            className={`${articleOpen === "converter" && "rotate-180" }`}
                                        />
                                    </div>
                                }
                            </div>
                            <div
                                className={`pt-4 inline w-[80%] overflow-hidden  transition-all duration-500 ease-in-out`}
                                style={
                                    needDropdownTool ? {
                                        height: articleOpen === "converter" ? `${articleRef.current[2].scrollHeight}px` : "0",
                                    }
                                    : undefined
                                }
                                ref={(el) => setArticleRef(2, el) }
                            >
                                <p className="w-[80%] inline text-center">{tr('pp_one_content', lg)}</p>
                            </div>
                        </div>
                        {/* article Unity */}
                        <div className="flex flex-col justify-center items-center pt-6">
                            <div
                                className={`${needDropdownTool ? `bg-yellowTheme w-full text-center py-2 rounded-lg flex justify-between items-center hover:cursor-pointer select-none` : "self-start" }`}
                                onClick={() => {needDropdownTool && activDropDown("unity")}}
                            >
                                <h2 className={`pb-2 text-2xl ${!needDropdownTool && "underline"} mx-auto pl-10 ${beginner.className}`}>{tr('pp_three_title', lg)}</h2>
                                {
                                    needDropdownTool &&
                                    <div className="self-center ml-auto">
                                        <Image
                                            src={double_arrow}
                                            alt="arrow"
                                            width={30}
                                            className={`${articleOpen === "unity" && "rotate-180" }`}
                                        />
                                    </div>
                                }
                            </div>
                            <div
                                className={`pt-4 inline w-[80%] ${needDropdownTool && "overflow-hidden  transition-all duration-500 ease-in-out"}`}
                                style={
                                    needDropdownTool ? {
                                        height: articleOpen === "unity" ? `${articleRef.current[3].scrollHeight}px` : "0",
                                    }
                                    : undefined
                                }
                                ref={(el) => setArticleRef(3, el) }
                            >
                                <p className="w-[80%] py-2 text-center">{tr('pp_three_intro', lg)}</p>
                                <p className="w-[80%] py-2 text-center"><span className="mr-2 text-lg font-bold">•</span>{tr('pp_three_one', lg)}</p>
                                <p className="w-[80%] py-2 text-center"><span className="mr-2 text-lg font-bold">•</span>{tr('pp_three_two', lg)}</p>
                                <p className="w-[80%] py-2 text-center"><span className="mr-2 text-lg font-bold">•</span>{tr('pp_three_three', lg)}</p>
                                <p className="w-[80%] py-2 text-center"><span className="mr-2 text-lg font-bold">•</span>{tr('pp_three_four', lg)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}