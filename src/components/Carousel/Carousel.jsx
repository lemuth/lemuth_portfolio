import { DotButton, useDotButton } from './CarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Carousel(props){

    const { slides, options, lg, tr } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    return (
        <section className="embla " dir="rtl">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((value, index) => {
                        return(
                            <div className="embla__slide" key={index}>
                                <div className="flex md:flex-row flex-col justify-between pb-6">
                                    <p className='md:text-4xl text-2xl font-semibold'>{value.intitule}</p>
                                </div>
                                <div className='flex md:flex-row flex-col w-[100%] h-full'>
                                    <div className='flex-col md:w-1/3 w-full p-4 ml-4'>
                                        <div className='p-4'>
                                            <div className='flex w-full justify-between'>
                                                <p className='font-semibold'>{value.type}</p>
                                                <p>{"Type"}</p>
                                            </div>
                                            <p className='pt-6 font-s'>{value[`prez_${lg}`]}</p>
                                        </div>
                                        <div className='flex justify-center md:pt-6 pt-0 w-full'>
                                            {
                                                value.technos.map((item, key2) => {
                                                    return(
                                                        <div key={key2} className='flex-col justify-center mr-2 items-center px-0 md:px-2 w-14'>
                                                            <p className='text-sm text-center font-semibold w-full pb-2'>{item.name}</p>
                                                            <div className={`bg-redTitle rounded-br-xl w-full px-4 rounded-bl-xl ${item.level === '3' ? "h-16" : item.level === "4" ? "h-24" : "h-10"} shadow-md shadow-gray-400`} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='flex-col'>
                                        {
                                            value.images &&
                                            <div className='flex'>
                                                {
                                                    value.images.map((img, key) =>{
                                                        if(value.images.length === 3){
                                                            return(
                                                                <div  key={key}>
                                                                    <Image src={img} width={200} height={374} alt={img} />
                                                                </div>
                                                            )
                                                        }
                                                        if(value.images.length === 2){
                                                            return(
                                                                <div  key={key}>
                                                                    <Image src={img} width={300} height={374} alt={img} />
                                                                </div>
                                                            )
                                                        }
                                                        if(value.images.length === 1){
                                                            return(
                                                                <div  key={key}>
                                                                    <Image src={img} width={400} height={374} alt={img} />
                                                                </div>
                                                            )
                                                        }
                                                    } )
                                                }
                                            </div>
                                        }
                                        {
                                            value.link &&
                                            <div className='flex w-full pt-6'>
                                                <Link
                                                href={value.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='w-full text-center text-xl border-2 border-redTitle border-opacity-0 hover:border-opacity-100 rounded-xl bg-redTitle/75'
                                            >
                                                {tr("carousel_link", lg)}</Link>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
                <div className="embla__dots z-10 hidden md:flex">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 