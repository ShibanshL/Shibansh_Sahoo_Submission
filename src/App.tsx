import './App.css'
import HomeCointainer from './components/HomeCointainer'
import { BrowserRouter as Router } from 'react-router'
function App() {

  return (
    <>
      <Router>
        <HomeCointainer />
      </Router>
    </>
  )
}

export default App
