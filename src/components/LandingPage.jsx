import React from 'react'
import {motion} from 'framer-motion'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-32 px-20'>
            <div className='w-fit flex masker font-["Founders_Grotesk"]'>
            <motion.div initial={{width:0}} animate={{width:"3vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className=' w-[7vw] h-[6vw] mt-5 mr-3 relative  bg-red-500'>              
            </motion.div>
                <h1 className='uppercase leading-[7.5vw] tracking-tighter text-[8vw] font-medium'>
                    Welcome</h1>
            </div>
            <div className='w-fit flex masker font-["Founders_Grotesk"]'>
            <motion.div initial={{width:0}} animate={{width:"6vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className=' w-[7vw] h-[6vw] mt-5 mr-3 relative  bg-red-500'>              
            </motion.div>
                <h1 className='uppercase leading-[7.5vw] tracking-tighter text-[8vw] font-medium'>
                    To React</h1>
            </div>
            <div className='w-fit flex masker font-["Founders_Grotesk"]'>
            <motion.div initial={{width:0}} animate={{width:"15vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className=' w-[7vw] h-[6vw] mt-5 mr-3 relative  bg-red-500'>              
            </motion.div>
                <h1 className='uppercase leading-[7.5vw] tracking-tighter text-[8vw] font-medium'>
                    Nexus</h1>
            </div>
        </div>

        <div className='border-t-[2px] border-zinc-700 mt-28 flex justify-between items-center py-5 px-20'>
            {[
                "Radisson Blu Hotel, Bengaluru Outer Ring Road",
                "July 04 - 05, 2024 (9:00 AM - 6:00 PM IST)",
            ].map((item, index) => (
                <p className='text-[1vw] font-light leading-none'>{item}</p>
            ))
            }
        </div>
    </div>
  )
}

export default LandingPage