import React, { useState } from "react"
import './gallery.css'

const WSPGallery = ({galleryImages}) => {
  const [slideNumber,setSliderNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
        <div className="galleryWarp">
            {
                galleryImages && galleryImages.map((slide, index)=> {
                    return(
                        <div className="sing" key={index}>
                            <img src={slide.image} alt="" />
                        </div>
                    )
                }) 
            }
        </div>
    </div>
  )
}

export default WSPGallery