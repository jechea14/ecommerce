import React from 'react'

type ButtonProps = {
    bgColor: string
    textColor: string
    value: string
}

const Button: React.FC<ButtonProps> = ({bgColor, textColor, value}) => {
  return (
    <button className={`${bgColor} ${textColor} py-1 px-5`}>
        {
            value
        }
    </button>
  )
}

export default Button