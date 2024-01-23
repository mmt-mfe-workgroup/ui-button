import { FC, MouseEvent } from 'react'

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  label: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button