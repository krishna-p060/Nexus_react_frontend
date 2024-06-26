import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-20 bg-green-800'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase'>
                Hello Attendees</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase'>
                Hello Attendees</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase'>
                Hello Attendees</motion.h1>
        </div>
    </div>
  )
}

export default Marquee