import React from 'react'

function Background() {
  return (

    // We cannot return 2 elements together so we used fragments <> </>
    <>

    <div className='fixed z-[2] w-screen h-screen'>
        <div className='mt-7 w-full py-10 flex justify-center text-zinc-400 font-semibold text-xl'>Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-[52%] text-[13vw] leading-none tracking-tighter text-zinc-900 font-semibold'>Docs.</h1>

    </div>
       
    </>
  )
}

export default Background
