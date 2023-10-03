import React from 'react'
import Media from "./data_gallery"
import WSPGallery from './WSPGallery'
import './gallery.css'


function gallery() {
  return (
    <div>
      <div>
        <WSPGallery galleryImages={Media}/>
      </div>

    </div>
  )
}


export default gallery