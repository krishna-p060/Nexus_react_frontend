import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-28 px-20'>
            <div className='masker font-["Founders_Grotesk"]'>
                <h1 className='uppercase leading-[7.5vw] tracking-tighter text-[8vw] font-medium'>
                    Welcome</h1>
            </div>
            <div className='w-fit flex masker font-["Founders_Grotesk"]'>
            <div className='w-[7vw] h-[6vw] mt-5 mr-3 relative  bg-red-500'></div>
                <h1 className='uppercase leading-[7.5vw] tracking-tighter text-[8vw] font-medium'>
                    To React</h1>
            </div>
            <div className='masker font-["Founders_Grotesk"]'>
                <h1 className='uppercase leading-[7.5vw] tracking-tighter text-[8vw] font-medium'>
                    Nexus</h1>
            </div>
        </div>

        <div className='border-t-[2px] border-zinc-700 mt-28'></div>
    </div>
  )
}

export default LandingPage