import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import MagicButton from '@/components/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';
import pfp from '@/public/pfp2.jpeg'

export default function Hero()
{
    return(
        <div className="pb-20 pt-36 h-screen">
            <div className='z-10'>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-[80vh] w-[80vw]" fill="white"/>
                <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="top-80 z-10 left-60 h-[60vh] w-[20vw]" fill="blue"/>
            </div>
            <div className="h-screen w-full dark:bg-rose-950 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-200 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className='flex justify-center relative my-10 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

                    <div className="w-48 h-48 mt-10 z-0  rounded-full overflow-hidden">
                        <Image src={pfp} width={200} height={200} alt="Profile Picture" />
                    </div>

                    <TextGenerateEffect 
                        className='text-center text-[20px] md:text-2xl lg:text-3xl mt-10'
                        words='Hi, i&apos;m Ayush, a web Developer'
                    />


                    <a href="#about">
                        <MagicButton 
                        title="Show My Work"
                        icon={<FaLocationArrow/>}
                        position='right'
                        />
                    </a>
                    
                </div> 
            </div>
        </div>
    );
}