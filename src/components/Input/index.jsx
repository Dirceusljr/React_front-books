import React from 'react'

const Input = ({placeholder, onBlur}) => {
  return (
    <input 
    className='border border-white border-solid bg-transparent py-5 px-36 rounded-barra w-auto text-white text-base mb-8 placeholder:text-white placeholder:text-base'
    type="text" 
    placeholder={placeholder}
    onBlur={onBlur}
    />
  )
}

export default Input