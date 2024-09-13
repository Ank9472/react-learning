import { useState } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Home/>
<Header/>
<Footer/>
</>
)
}
export default App
