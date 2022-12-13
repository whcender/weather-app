import React from 'react'

const inputArea = (props) => {
  return (
    
    <div className='mt-4 flex justify-center'>
      
      <form  onSubmit={(e)  => {
        e.preventDefault()
        props.onSetCity(e.target[0].value)
      }}>
        <input 
          className='px-3 py-3 placeholder-slate-400 text-slate-800 relative bg-slate rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-80 ' placeholder='Şehir Girin' type="text" />
      </form>
    </div>

  )
}

export default inputArea