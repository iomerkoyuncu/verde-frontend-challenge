import React from 'react'
import SpinnerGif from '../assets/spinner.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img width={50} className="text-center mx-auto" src={SpinnerGif} alt="Loading" />
    </div>
  )
}

export default Spinner
