import React from 'react'

function HashTag({text,color}:{text:string[],color?:string}) {
  return (
    <div className = "flex space-x-3"> 
      {
        text.map((elem)=>(  
        <p className="flex-row items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-3 py-1 ">
        #{elem}
    </p>))
      }
      
    </div>
  )
}

export default HashTag