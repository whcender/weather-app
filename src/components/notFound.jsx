import React from 'react'

const notFound = () => {
  return (
    <>

      <div className="flex items-center justify-center min-h-screen bg-white  bg-fixed bg-cover bg-bottom error-bg"
       >

        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-gray-500 text-center -mt-52">
              <div className="relative ">
                <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                  <span>4</span><span>0</span><span>4</span></h1>
                <span className="absolute  top-0   -ml-12  text-gray-400 font-semibold">Oops!</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default notFound