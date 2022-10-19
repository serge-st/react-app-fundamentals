import { FC } from 'react'
import './Button.css'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  name: string
}

const Button: FC<ButtonProps> = ({ name, ...attributes }) => {
  return (
    <button {...attributes} className="myBtn">
      {name}
    </button>
  )
}

export default Button
