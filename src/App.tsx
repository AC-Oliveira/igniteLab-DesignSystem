import { useState } from 'react'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading>
        Heading
      </Heading>
      <Text>Text with p</Text>
    </>
  )
}
// Comment
export default App
