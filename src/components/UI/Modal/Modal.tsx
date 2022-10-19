import { FC, ReactNode } from 'react'
import './Modal.css'

interface ModalProps {
  children: ReactNode
  visible: boolean
  setVisible: (b: boolean) => void
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = ["myModal"]
  if (visible) {
    rootClasses.push("active")
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className="myModalContent" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
