import { useState, useRef, useEffect } from 'react'
import catdance from '@/assets/catdance.gif';

function App() {
  const [color, setColor] = useState(0)
  const [position, setPosition] = useState({ top: 0, left: 0})
  const [velocity, setVelocity] = useState({ x:2, y:2 })
  const emoteRef = useRef(null)

  const colors =  [
    'green',
    'red'
  ]

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        top: position.top += velocity.x,
        left: position.left += velocity.y
      })
    }
    requestAnimationFrame(updatePosition);
  }, position)


  return (
    <>
      <div>
        <img 
        src={catdance}
        ref={emoteRef}
        style={{ 
          position: 'absolute', 
          top: position.top, 
          left: position.left }}/>
      </div>
    </>
  )
}

export default App
