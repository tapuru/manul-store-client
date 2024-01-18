import { IconProps } from './types/IconProps'

export const ArrowRightIcon = ({ w = "24", h = "24" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none">
      <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
