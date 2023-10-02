import React from 'react'
import Data from './activities'
function gallery() {
  return (
      <div className='App'>
          <h2> View Images </h2>
          <div className='container-fluid' >
            <div className='row'>
              {
                Data.map((item)=>{
                  return(
                    <div key={item.id} className='col-6 col-md-4'>
                    <img src={item.url} 
                          alt={`image_${item.url}`}
                          height="200" 
                      />
                    <br />ID:{item.id}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
  )
}

export default gallery
