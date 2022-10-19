import { FC } from 'react'
import { useHeight } from '../../hooks/useHeight'
import './About.css'

const About: FC = () => {
  const height = useHeight('nav')

  return (
    !height
      ? null
      : <div
          className=".about"
          style={{
            height
          }}
        >
        <h1>This app is created in order to tackle the main React functionality.</h1>
      </div>
  )
}

export default About
