import { FC, MouseEvent } from 'react'

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  label: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, label, disabled, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button