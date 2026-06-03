import { Route, Routes } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { EntitiesPage } from "@/pages/EntitiesPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/entities" element={<EntitiesPage />} />
    </Routes>
  )
}

export default App