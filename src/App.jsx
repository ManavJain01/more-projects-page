import { Route, Routes } from 'react-router-dom'

//      * More Projects Page *
import More_Projects from './More Projects Page/components/Index'

function App() {
  return (
    <div>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<More_Projects />}></Route>
      </Routes>
    </div>
  )
}

export default App
