
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sidebar from './comman/Sidebar'
import Accounting from './components/Accounting'

function App() {


  return (
    <>
      <div className="d-flex flex-column flex-md-row">
        <Sidebar />
        <main className="flex-grow-1 bg-white">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/banking" element={<Accounting />} />
            <Route path="/reports" element={<Accounting />} />
            <Route path="/contact" element={<Accounting />} />
            <Route path="/invoice" element={<Accounting />} />
            <Route path="/queries" element={<Accounting />} />

          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
