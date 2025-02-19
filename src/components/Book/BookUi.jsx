import { useContext } from "react";
import { BookPageContext } from "@/hooks/contextProvider";
import UseWindowsSize from "@/hooks/useWindowsSize"

import streetProject1 from "@/assets/img/bonus/TP-street_project_1.jpg"
import streetProject2 from "@/assets/img/bonus/TP-street_project_2.jpg"
import lfd1 from "@/assets/img/bonus/TP-street_in_fire_1.jpg"
import lfd2 from "@/assets/img/bonus/TP-street_in_fire_2.jpg"
import tcExt1 from "@/assets/img/bonus/TeakCell-vue-exterieur_1.jpg"
import tcExt2 from "@/assets/img/bonus/TeakCell-vue-exterieur_2.jpg"
import moonoeuf1 from "@/assets/img/bonus/CM-moonoeuf_1.jpg"
import moonoeuf2 from "@/assets/img/bonus/CM-moonoeuf_2.jpg"
import vestiaire1 from "@/assets/img/bonus/CM-vestiaire_1.jpg"
import vestiaire2 from "@/assets/img/bonus/CM-vestiaire_2.jpg"
import bureau1 from "@/assets/img/bonus/CM-bureau_1.jpg"
import bureau2 from "@/assets/img/bonus/CM-bureau_2.jpg"
import bookBack from "@/assets/img/bonus/book-back.jpg"
import bookCover from "@/assets/img/bonus/book-cover.jpg"
import brain from "@/assets/img/bonus/brain_chair.jpg"
import gPlane from "@/assets/img/bonus/ghibli-type-plain.jpg"

const pictures = [
    streetProject1,
    streetProject2,
    lfd1,
    lfd2,
    tcExt1,
    tcExt2,
    vestiaire1,
    vestiaire2,
    bureau1,
    bureau2,
    moonoeuf1,
    moonoeuf2,
    brain,
    gPlane
];

// export const pageAtom = atom(0);
export const pages = [
    {
        front: bookCover,
        back: pictures[0],
    },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
    pages.push({
        front: pictures[i % pictures.length],
        back: pictures[(i + 1) % pictures.length],
    });
}
pages.push({
    front: pictures[pictures.length - 1],
    back: bookBack,
});

export const BookUi = () => {

    const {bookPage, setBookPage} = useContext(BookPageContext);
    const {width} = UseWindowsSize()

    return (
        <>
            <main className={`w-full pointer-events-none select-none z-10 flex justify-between flex-col ${width < 996 && "pt-4"}`}>
                
                <div className="w-full overflow-auto pointer-events-auto flex justify-center">
                    <div className={`w-full justify-center flex items-center ${width > 996 ? "gap-4 p-10" : "gap-2 flex-wrap"} max-w-full`}>
                        {[...pages].map((_, index) => (
                            <button
                                key={index}
                                className={`border-transparent hover:border-white transition-all duration-300 rounded-full ${width > 996 ? "text-lg px-4 py-3" : "text-sm px-2 py-2"} uppercase border shadow-xl ${
                                index === bookPage
                                    ? "bg-white/90 text-black"
                                    : "bg-black/30 text-white"
                                }`}
                                onClick={() => setBookPage(index)}
                            >
                                {index === 0 ? "Couverture" : `Page ${index}`}
                            </button>
                        ))}
                        <button
                            className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border shadow-xl ${
                                bookPage === pages.length
                                ? "bg-white/90 text-black"
                                : "bg-black/30 text-white"
                            } ${width > 996 ? "text-lg px-4 py-3" : "text-sm px-2 py-2"}`}
                            onClick={() => setBookPage(pages.length)}
                        >
                            Verso
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};