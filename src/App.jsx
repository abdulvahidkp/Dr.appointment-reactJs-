import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from './router/UserRoutes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
