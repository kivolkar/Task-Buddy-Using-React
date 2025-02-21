import { useState } from 'react'
import TaskForm from './Components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TaskForm />
    </>
  )
}

export default App