import Image from "next/image"
import Button from "./Button"

const ImageClipBox = ({src, clipClass}) => {
    return (
        <div className={`${clipClass}`}>
                <Image src={src} alt={src} fill />
        </div>
    )
}

const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
        <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
            <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 '>
                <ImageClipBox src="/img/contact-1.webp" clipClass="size-64 contact-clip-path-1" />
                <ImageClipBox src="/img/contact-2.webp" clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40 size-64" />
            </div>
            <div className='absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-40 lg:w-80'>
                <ImageClipBox src="/img/swordman-partial.webp" clipClass="absolute size-64 hidden md:block md:scale-125" />
                <ImageClipBox src="/img/swordman.webp" clipClass="sword-man-clip-path size-64 md:scale-125" />
            </div>
            <div className="flex flex-col items-center text-center">
                <p className="font-general text-[10px] uppercase">Join Zodius</p>
                <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">Let's b<b>u</b>ild the <br /> new <b>e</b>ra of <br /> g<b>a</b>ming t<b>o</b>gether</p>
                <Button title="Contact us" containerClass="mt-10 cursor-pointer bg-blue-50" />
            </div>
        </div>
    </div>
  )
}

export default Contact