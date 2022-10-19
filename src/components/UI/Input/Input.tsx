import { FC } from 'react'
import './Input.css'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
}

const Input: FC<InputProps> = ({ ...attributes }) => {
  return (
    <input
      {...attributes}
      className="myInput"
    />
  )
}

export default Input
