import React from 'react'

function MainContainer({children}) {
  return (
    <div className='xl:w-[75%] md:w-[55%] w-[100%] bg-black h-[100vh]'>
      {children }
    </div>
  )
}

export default MainContainer
