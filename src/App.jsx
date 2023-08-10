import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes'
import { useEffect } from 'react'
import { listen } from './redux/listener'

function App() {


  useEffect(() => {
    listen();
  }, []);

  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
