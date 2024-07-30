import { Route, Routes } from 'react-router-dom'

//      * Home Page *
import HomePage from './pages/Home Page/Index'

//      * Projects *
import NextJs from './pages/Projects/NextJs/NextJs'
import ReactNative from './pages/Projects/React Native/Native'

function App() {
  return (
    <div>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/NextJs" element={<NextJs />}></Route>
        <Route path="/ReactNative" element={<ReactNative />}></Route>
      </Routes>
    </div>
  )
}

export default App
