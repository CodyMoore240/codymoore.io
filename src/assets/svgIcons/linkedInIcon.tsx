import React from 'react'
import ISvgIcon from 'interfaces/ISvgIcon'

function linkedInIcon({
  containerClass,
  bgClass
}: ISvgIcon) {
  return (
    <svg className={containerClass} x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300">
        <rect className={bgClass} x="0.212" y="-1.101" width="301.099" height="301.101"/>
        <rect x="47.295" y="104.929" fill="#FFFFFF" width="44.521" height="148.521"/>
        <path fill="#FFFFFF" d="M204.008,109.559c16.62,0,29.265,5.343,37.932,16.029c8.667,10.684,13,25.287,13,43.807v84.056h-44.521
        v-79.425c0-20.657-7.241-30.986-21.725-30.986c-11.636,0-19.232,5.817-22.795,17.452v92.959h-44.521
        c0.475-89.041,0.475-138.549,0-148.521h35.261l2.85,29.562h0.713C170.41,117.87,185.012,109.559,204.008,109.559z"/>
        <path fill="#FFFFFF" d="M46.584,67.888c0-14.959,7.716-22.438,23.149-22.438c15.196,0,22.795,7.479,22.795,22.438
        c0,14.722-7.599,22.084-22.795,22.084C54.3,89.972,46.584,82.609,46.584,67.888z"/>
      </svg>
  )
}

export default linkedInIcon