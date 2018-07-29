import React from 'react'

interface IProps {
  className?: string
}

const ArrowRight: React.SFC<IProps> = ({ className }) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={className}
  >
    <polygon
      fill="currentColor"
      points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
    />
  </svg>
)

export default ArrowRight