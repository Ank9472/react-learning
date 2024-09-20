import Login from './Components/login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Tiwari Enterprises</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
