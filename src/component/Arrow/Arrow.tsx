import React from 'react'
import {BiUpArrowAlt} from 'react-icons/bi'

const Arrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToTop}
        className="bg-red-500 text-white rounded-full p-3 transition duration-300 ease-in-out"
      >
        <BiUpArrowAlt className="h-6 w-6"/>
      </button>
    </div>
    </>
  )
}

export default Arrow
