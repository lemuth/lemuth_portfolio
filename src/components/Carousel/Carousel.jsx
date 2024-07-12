import { DotButton, useDotButton } from './CarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './CarouselArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function Carousel(props){

    const { slides, options } = props
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
                                <div>
                                    <p>Mes Expériences</p>
                                </div>
                                <div className="flex md:flex-row flex-col justify-between pb-6">
                                    <p className='md:text-4xl text-2xl font-semibold'>{value.intitule}</p>
                                    <p className='md:text-5xl text-3xl text-redTitle'>{value.periode}</p>
                                </div>
                                <div className='flex md:flex-row flex-col w-[100%] h-full'>
                                    <div className='flex-col md:w-1/3 w-full p-4 ml-4'>
                                        <div className='shadow-lg p-4'>
                                            <div className='flex w-full justify-between'>
                                                <p className='font-semibold'>{value.type}</p>
                                                <p>{"Type"}</p>
                                            </div>
                                            <div className='flex w-full justify-between'>
                                                <p>{value.duree}</p>
                                                <p>{"Durée"}</p>
                                            </div>
                                            <p className='pt-6 font-s'>{value.prez}</p>
                                        </div>
                                        <div className='flex justify-center md:pt-6 pt-0 w-full'>
                                            {
                                                value.technos.map((item, key2) => {
                                                    return(
                                                        <div key={key2} className='flex-col justify-center mr-2 items-center px-0 md:px-2 w-14'>
                                                            <p className='text-sm text-center font-light md:font-semibold w-full pb-2'>{item.name}</p>
                                                            <div className={`bg-redTitle rounded-br-xl w-6 md:w-10 px-4 rounded-bl-xl ${item.level === '3' ? "h-16" : item.level === "4" ? "h-24" : "h-10"} shadow-md shadow-gray-400`} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='flex md:w-2/3 w-full justify-center'>
                                        {
                                            value.images &&
                                            value.images.map((img, key) =>{
                                                return(
                                                    <div  key={key}>
                                                        <Image src={img} width={200} height={374} alt={img} />
                                                    </div>
                                                )
                                            } )
                                        }
                                        {
                                            value.link &&
                                            <div className='flex w-full h-full shadow-md'>
                                                <iframe src={value.link} className='w-full h-full' />
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
                <div className="embla__dots z-10">
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