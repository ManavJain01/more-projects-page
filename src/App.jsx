import { Route, Routes } from 'react-router-dom'

//      * Home Page *
import HomePage from './pages/Home Page/Index'
import SecondPage from './pages/Second Page/Index'
import ThirdPage from './pages/Third Page/Index'

function App() {
  return (
    <div>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<div>
          <HomePage />
          <SecondPage />
          <ThirdPage />
        </div>}></Route>
      </Routes>
    </div>
  )
}

export default App
