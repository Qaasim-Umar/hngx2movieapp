import React from 'react'
import Sidebar from '../sections/Sidebar/Sidebar'
import FilmDetails from '../sections/FilmDetails/FilmDetails'
const Details = () => {
  return (
    <div className='view-flex'>
       {/* Sections in the Details page */}
        <Sidebar/>
        <FilmDetails/>
    </div>
  )
}

export default Details