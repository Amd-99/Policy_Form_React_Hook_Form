import React from 'react'

function PreComp(props) {
    return (
        <div className='col-5 preClass   '>
            <span className='display-5 h1 d-flex justify-content-center w-100 position-sticky top-0 border border-2 p-1 '>OutPut</span>

   <div className='overflow-auto'>
   <pre className='p-4 fw-bold  ' >
          {props.dataValues}
      </pre>
   </div>
      
        </div>
    )
}

export default PreComp
