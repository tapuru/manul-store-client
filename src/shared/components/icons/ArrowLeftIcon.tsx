import React from 'react'
import { IconProps } from './types/IconProps'

export const ArrowLeftIcon = ({w = "24", h = "24"}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none">
      <path d="M11 5L4 12L11 19M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
